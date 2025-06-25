const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");

admin.initializeApp();
const db = admin.firestore();

const comfortMessages = {
  2: "Take it easy today 💆‍♀️",
  3: "Stay hydrated and rest 😌",
  4: "You're doing great 💪",
  5: "Almost there ❤️",
  6: "Cycle ends today ✅"
};

exports.sendDailyNotifications = functions.pubsub.schedule("0 6 * * *").timeZone("Asia/Kathmandu").onRun(async (context) => {
  const snapshot = await db.collection("users").get();

  const now = new Date();
  const today = new Date(now.toDateString());

  const notifications = [];

  snapshot.forEach(doc => {
    const data = doc.data();
    const token = data.fcmToken;
    const startDateStr = data.startDate;

    let body = "Wishing you a peaceful day ahead 🌼";
    if (startDateStr) {
      const startDate = new Date(startDateStr);
      const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
      if (diffDays >= 2 && diffDays <= 6) {
        body = comfortMessages[diffDays];
      }
    }

    notifications.push(
      fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          "Authorization": "key=YOUR_SERVER_KEY_HERE",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: token,
          notification: {
            title: "Aakriti",
            body,
            icon: "/icon-192.png"
          }
        })
      })
    );
  });

  await Promise.all(notifications);
  return null;
});
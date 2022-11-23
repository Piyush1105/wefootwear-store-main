import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = {
  type: "service_account",
  project_id: "footwear-ecommerce",
  private_key_id: "00532e2b1fe883fb51cb89c57ca8a789c20ca918",
  private_key: process.env.NEXT_PUBLIC_FIREBASE_SECRET,
  client_email:
    "firebase-adminsdk-zp1c2@footwear-ecommerce.iam.gserviceaccount.com",
  client_id: "115524336642708944609",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zp1c2%40footwear-ecommerce.iam.gserviceaccount.com",
};
// {
//   "type": "service_account",
//   "project_id": "footwear-ecommerce",
//   "private_key_id": "00532e2b1fe883fb51cb89c57ca8a789c20ca918",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCbs4XwaFYfEeIF\nagJtndJvyaYvIxEVmQi42vU45+1OSg2DKMzSLGcR3RblbgDRMQMX7TwkF6d8+rii\nkmj4bIriJS733mPJiTRxllHHU3iaNoLvfbZWTWXVluX74/9tRKwr+UA25XaJKDNl\nd2GH9GvHGVRkopbZGys6d9+JB1jxV+7wUSJgQzc7Jm6t/jBgGnfVq86iApt4RBre\nR105EocsM9EJpVNNv5jVGRXq00etgmXR3wMRjsO9zIFXWais0lbXEyPnRziyq1w6\nR0bcBSW0vDWu7CnFX+xuPtrlETTYevJhBNrtextWwfg1fIvjgy3gArcJ3loySXOD\nKdeICCqvAgMBAAECggEABOCH3VgZ+9QpZ8ZXzXYy7W8mu6BAvJP0FXzqTyjYopSo\nPV0C+WxhosocRFMrRwzezho6Ft6qJOc3ma62B14NsE1o3g5twsDU+d/dr5LaRWkC\ntfISoDvBaQIr3GAvvoz29aj+OBn8716T1Dr755siNcosfhB9DXo6jZTMADSmNme1\nrgWswHQj1KG4SMMkbdnAdNUtIGxHwh+cQO2kXpuS8mv1xnhPv7od6BcQWPuT2asb\n5rqHO9OziRQ1r7JwfhbAV6PWj0giXdO4q4EoMXHe2sPi+n4qGSEjHD6aCtWWsdNi\npeLyXAaNGbEwbg2zJI1oFaZRIZEA7nFOpnCQcTa8OQKBgQDXE5gqL2egDRvsOjap\nU6JtphClzqvQqO4d1j2jfrFExmyP/+Ez8EQLRS8citeha3df9Hzp/kRTnL/UKPtt\n6vOKVuo+4NzjkhoS5eGvs4ajqDknG/DQmu6IADjlw3b4kjYqF2rva9I3+pm3cl6R\nDiiT8PY++wpZuPJEcjVxbKP5mQKBgQC5U8BgSIYXEr64Q9bXq/yK+cIdQdGwF+Ow\nr5fVAefZ/6ftqQvHu9wplbIXzBy3n65rlSACNb0J9c70pix9aLI0T5XM1oZkwwb8\n+0ughOn3i9kSzvKLkpWcNXFbELrnnCj/P7I09iqw6C+4WG+d5W9OYDs9e0jUoDgO\n5ybLb/DDhwKBgQDVy/GYBbWR4VYfdiK+IZg2PT0RRad/7V1+pWhybM9UmZZzcp3w\nHmfVeDmDuvTszkJFTWkaxZowL4J1KSP+uO7NVubWCHsrcSGgJYo6OVCewOvHV7wD\n8e8pnGby52INaHKVVuADDgBTizZgqD0fHp7xqTdvledNF08lAQ7lKGS8CQKBgBLx\nj6mH4ET9goc9T/mtt9vQ2dm5v6BbYMfPuxpn3nY3Hsg5Tl31QvTxO0oZcBoI9YBD\ntwjiy1b4TFZPoh6TlBuqwuo0R3qHQPCdE0buLyhBoEe+5aYErsxP3i1r0V8ZZEtr\nDGFDhGue4DncuFQQfscpKQUI1BH/6psDX8DNyXODAoGAHSd8LeeUbtQeDHWK38c5\n97iYQ9KvsSbEb12d2XUpKsML7ITcWiFxEQb4IoJVDneQO4QdvlzItEyGQGjIhbLM\niQFLuiC+JRn76VzrEs4A9JggCTQlnX44BOQOikNa75T4bj02wXBC5bsEW864I3e3\nYQAvwL6hTA1YCLnUggZIkpI=\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-zp1c2@footwear-ecommerce.iam.gserviceaccount.com",
//   "client_id": "110556708890098214848",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zp1c2%40footwear-ecommerce.iam.gserviceaccount.com"
// }
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: (session.amount_total / 100) * 10000,
      amount_shipping: (session.total_details.amount_shipping / 100) * 10000,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(console.log(`Order Success ${session.id}`));
};
export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];
    let event;
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("error");
      return res.status(400).send("error");
    }
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send("webhook error" + err.message));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

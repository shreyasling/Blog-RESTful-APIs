const { PORT, CONNECTION_URL, JWT_SECRET,SENDER_EMAIL,SENDER_PASS,AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
  AWS_REGION} = process.env;

module.exports = {
  port: PORT,
  connectionURL: CONNECTION_URL,
  jwtSecret: JWT_SECRET,
  senderemail:SENDER_EMAIL,
  senderpassword:SENDER_PASS,
  awsAccesskey:AWS_ACCESS_KEY,
  awsSecretAccessKey:AWS_SECRET_ACCESS_KEY,
  awsBucketName:AWS_BUCKET_NAME,
  awsRegion:AWS_REGION
};

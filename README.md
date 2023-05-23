# Real-Time Messenger Clone

This is a Messenger clone built with [Next.js](https://nextjs.org/).

## Technologies Used

- [Cloudinary](https://cloudinary.com/): Cloud-based image and video management platform.
- [Pusher](https://pusher.com/): Real-time communication API for building web and mobile applications.
- [MongoDB Atlas](https://mongodb.com/atlas/): Cloud-based database service for MongoDB.
- [Google Developer Platform](https://console.cloud.google.com/): Platform for developing and managing Google Cloud services.

## Installation

1. Clone the repository: 
```shell
git clone https://github.com/1Ir-is/Messenger-Clone-NEXT.JS.git
```
2. Install packages: 
```shell
npm i
```
## Setup .env file
```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```
## Setup Prisma
```shell
npx prisma db push
```

## Usage

1. Start the development server:
```shell
npm run dev
```
2. Open your browser and navigate to: 
```shell
http://localhost:3000
```

## Deployment

This project can be easily deployed to [Vercel](https://vercel.com/).

1. Sign up for a Vercel account.
2. Install the Vercel CLI: `npm install -g vercel`
3. Deploy the project: `vercel`
4. Follow the CLI prompts to configure the deployment settings.
5. Once deployed, you will receive a deployment URL.
6. And here is my project when deploy successfully: [Messenger Clone](https://messenger-clone-next-4bzvatt3j-1ir-is.vercel.app/).

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please open an issue or submit a pull request.

## Acknowledgments

- This project was inspired by [Messenger](https://www.messenger.com/).
- Feel free to customize the README.md file further based on your project's specific details and requirements. Let me know if there's anything else I can assist you with!

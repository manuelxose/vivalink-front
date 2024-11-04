# VivaLink Frontend

**Contributors:** [@manuelxose](https://github.com/manuelxose), [@j-SantosC](https://github.com/j-SantosC)

## Table of Contents

- [VivaLink Frontend](#vivalink-frontend)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Key Features](#key-features)
  - [Project Architecture](#project-architecture)
  - [Technologies Used](#technologies-used)
  - [Live Demo](#live-demo)
  - [Screenshots](#screenshots)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [1. Clone the Repository](#1-clone-the-repository)

---

## Project Description

**VivaLink** is a SaaS platform designed to connect residential communities with service providers (companies and freelancers). The platform simplifies service management, hiring, and communication between both groups by providing digital tools that facilitate traditionally complex and manual processes.

This repository, **vivalink-front**, contains the frontend application developed with Angular and Angular Universal for server-side rendering (SSR). It leverages Tailwind CSS for modern and responsive UI design.

## Key Features

- **User Registration and Authentication:** Secure sign-up and login for communities and providers.
- **Personalized Profiles:** Detailed profiles with relevant information and customization options.
- **Service Requests Management:** Communities can post service needs and receive proposals from providers.
- **Proposals and Contracting System:** Providers can send proposals and manage digital contracts.
- **Electronic Voting:** Tool for communities to conduct internal votes and make transparent decisions.
- **Payment Management:** Integration with payment gateways to handle transactions and service payments.
- **Notifications and Internal Messaging:** Real-time notification system and messaging to improve communication.
- **Ratings and Reviews:** Communities can rate providers, promoting service quality.
- **Administration and Configuration:** Control panel for administrators with advanced management tools.

## Project Architecture

The project follows a modular and scalable architecture, separating responsibilities between frontend and backend, and adhering to development best practices.

- **Frontend:** Developed with Angular and server-side rendering using Angular Universal to enhance SEO and performance.
- **Backend:** Implemented with Node.js and Express (in a separate repository), using a RESTful API to handle requests and business logic.
- **Database:** MongoDB is used as the NoSQL database to store users, requests, proposals, etc.
- **Authentication and Security:** JWT authentication and role-based access control to ensure platform security.

## Technologies Used

- **Frontend:**
  - Angular 12+
  - Angular Universal (SSR)
  - Tailwind CSS
  - TypeScript
  - ngx-cookie-service
- **Tools and Libraries:**
  - RxJS
  - Git and GitHub for version control
  - Postman for API testing
- **Development Tools:**
  - Visual Studio Code
  - Angular CLI

## Live Demo

_Note:_ A live demo is not available at this time. A link will be provided when the project is deployed.

## Screenshots

_(Include screenshots of the application once available.)_

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 14 or higher): [Download Node.js](https://nodejs.org/)
- **Angular CLI** (version 12 or higher): Install via `npm install -g @angular/cli`
- **Git**: [Download Git](https://git-scm.com/downloads)
- **GitHub Account**: To clone the repository
- **Access to the Backend API**: Ensure the backend API is running and accessible (refer to the backend repository for setup instructions)

## Installation

Follow these steps to set up the project locally.

### 1. Clone the Repository

Using SSH:

```bash
git clone git@github.com:manuelxose/vivalink-front.git
cd vivalink-front
2. Install Frontend Dependencies
bash
Copiar código
npm install
Configuration
1. Environment Variables
Create environment files for development and production in the src/environments/ directory.

environment.ts (Development)
typescript
Copiar código
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // Replace with your backend API URL
};
environment.prod.ts (Production)
typescript
Copiar código
export const environment = {
  production: true,
  apiUrl: 'https://your-production-api.com/api' // Replace with your production API URL
};
2. Tailwind CSS Configuration
Tailwind CSS is already set up in the project. Ensure that tailwind.config.js and postcss.config.js are correctly configured.

Running the Project
Development with SSR
To run the application in development mode with server-side rendering:

bash
Copiar código
npm run dev:ssr
The application will be available at http://localhost:4200/.

Development without SSR
If you prefer to run the application without SSR:

bash
Copiar código
ng serve
The application will be available at http://localhost:4200/.

Available Scripts
ng serve: Runs the app in development mode without SSR.
npm run dev:ssr: Runs the app in development mode with SSR.
npm run build:ssr: Builds the app for production with SSR.
npm run serve:ssr: Serves the production build with SSR.
Project Structure
lua
Copiar código
vivalink-front/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   ├── services/
│   │   │   └── core.module.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   ├── directives/
│   │   │   ├── models/
│   │   │   ├── pipes/
│   │   │   └── shared.module.ts
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── comunidades/
│   │   │   ├── proveedores/
│   │   │   ├── perfil/
│   │   │   ├── admin/
│   │   │   ├── pagos/
│   │   │   ├── notificaciones/
│   │   │   └── reports/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── styles/
│   │   └── styles.scss
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
Contribution
Contributions are welcome! To contribute to the project, follow these steps:

Fork the repository.

Clone your fork to your local machine:

bash
Copiar código
git clone git@github.com:your-username/vivalink-front.git
cd vivalink-front
Create a new branch for your feature or bug fix:

bash
Copiar código
git checkout -b feature/your-feature-name
Make your changes and commit them:

bash
Copiar código
git add .
git commit -m "Add new feature: your feature name"
Push to your branch:

bash
Copiar código
git push origin feature/your-feature-name
Open a Pull Request on GitHub and describe your changes.

Current Contributors:

@manuelxose
@j-SantosC
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
If you have any questions or need further information, feel free to contact the contributors:

Manuel Xosé

GitHub: @manuelxose
Santos C.

GitHub: @j-SantosC
FAQ
Q: How can I reset my password?

A: Use the "Forgot Password" option on the login page to receive instructions via email.

Q: How do I change my user role?

A: Contact the system administrator for role change requests.

Q: Where can I report an issue or suggest an improvement?

A: You can open an issue on GitHub or contact the contributors directly.

Roadmap
Integration with Additional Payment Gateways: Expand available payment options.
Mobile Application: Develop mobile apps for iOS and Android.
Multilanguage Support: Add support for multiple languages.
Push Notifications: Implement real-time notifications.
Enhanced Reporting: Provide advanced analytics and reporting features.
Acknowledgments
We would like to thank everyone who has contributed and supported the development of VivaLink.

Note: This README serves as a comprehensive guide to help you get started with VivaLink Frontend. If you have any questions or suggestions, please feel free to reach out.

Additional Notes
Security
Password Management: Passwords are securely stored using hashing with bcrypt.
Authentication: JWT (JSON Web Tokens) is used for secure user session management.
Data Validation: All input data is validated and sanitized to prevent code injection and other attacks.
Roles and Permissions: Access to routes and functionalities is controlled based on user roles.
Testing
Unit Tests: Utilize Jasmine and Karma for frontend testing.

Running Tests:

bash
Copiar código
ng test
Deployment
Production Build:

bash
Copiar código
npm run build:ssr
Serving Production Build:

bash
Copiar código
npm run serve:ssr
Deployment Considerations:

Ensure environment variables are correctly set for production.
Use platforms like Heroku, AWS, or DigitalOcean for deployment.
Configure SSL certificates for secure connections.
Changelog
Detailed changes for each release are documented in the CHANGELOG.

How to Get Help
If you're having trouble with the project, please check the Issues page to see if your issue has already been reported. If not, feel free to open a new issue describing the problem.

Supporting the Project
If you find this project useful, please consider giving it a star ⭐ on GitHub. Your support is greatly appreciated!

Versioning
We use Semantic Versioning for versioning. For the versions available, see the tags on this repository.

Code of Conduct
Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

Disclaimer
This project is currently under development. Features and functionalities are subject to change. Use at your own risk.

yaml
Copiar código

Feel free to customize this `README.md` further to suit your project's specific needs. Make sure to replace placeholders like `your-username` and update any URLs or instructions as necessary.

---

**Happy coding!**
```

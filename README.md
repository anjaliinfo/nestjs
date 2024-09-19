# Project Description
 Step 1: Set Up Your NestJS Project basic example for installing and running an application

# Install Nest CLI globally
npm install -g @nestjs/cli

# Step 1 create a new NestJS project:
   nest new nestjs
   cd nestjs 

# Step 2: Generate a Module and a Controller 

   nest generate module sample
   nest generate controller sample
   nest generate service sample 
   

# Step 3: Start the Application

     import { Module } from '@nestjs/common';
     import { SampleModule } from './sample/sample.module';
  
     @Module({
       imports: [SampleModule],
     })
     export class AppModule {}

# Step 4 :  Update the App Module  

     npm run start 

# Run http://localhost:3000/sample in browser 

![image](https://github.com/user-attachments/assets/2f288715-5345-4b15-96ca-484fd5354281)

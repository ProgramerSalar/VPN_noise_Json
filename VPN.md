
-------------------------------------------------------------------------
Note: You should follow this documentation https://thapatechnical.shop/blogs/host-a-mern-stack-app-on-a-vps


# how to setup vps surver in Hostinger: 

## 0.0 Setup the VPS 

1. You have the VPS Information Panal then i will teach you how too do ? 
2. open the your cammand line make sure this: C:\Users\Manjusha Kumari> 
paste the SSH Success Terminal in the command line and then password,


you show this interface:
![you show this interface:](Readme_Photo/access_the_linux_machine_in_your_cammd_line.png)



3. before installing any software, it's good practice to update your VPS packages:

``` 
    # sudo apt update 
    # sudo apt upgrade
```

## 0.1  This is once time Setup 

### 1. first we will install the NVM (Node version Manger) because how to manage the version of package, so we need of this nvm 


```
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
if you check the version: nvm --version then you get this: Command 'nvm' not found, but there are 14 similar ones.

exit code:
 ```
# exit
```

you should restart the again your command line and enter the ssh Terminal and password 
then you write the 

```
# nvm --version
``` 



### 2. Install the node 

```
# nvm install --lts

```
lts -> long term support 

check the verion

```
# node -v
```

### 3. install the Git 

```
# sudo apt install git
```


if you connect github to your project  
then install the cli of github 

```
# sudo apt install gh
```


Authenticate the your github in nvm 

```
# gh auth login
```



## 0.3 This is connection of Project 

1. you should clone the project 

```
git clone https://github.com/ProgramerSalar/noise-json.git

// if you delete the clone project 
rm -rf /path/to/repository

```

and then go to the project like 

```
cd <your-project-name>
```


you use the ls command then you know the file information


you should install the pnpm because it's need to install the package 

```
# npm i pnpm --global
# pnpm i
```
### 2. Setup environment variables

```
nano .env // Nano is a shell based text editor which comes by default on linux

// We have an environment variable named DB_URL so let's include it.
MONGODB_URI=mongodb://127.0.0.1/vps-test-db
JWT_SECRET=oHSLF&#WsA#WpJ!QCWLz7rCL5^sHgD62Qe8tgb3&SSscRu$sFi*L9MSSgnBM2*!$pyXS&XwHyK8RFFh2cboJv6vy5h#cnpBrymtF*@37!C@ohdHR48@%%4X!Az@wiyCe
PORT=8000

// Then press Ctrl + O and enter to save it.
// The press Ctrl + X to exit out of nano.

// Let's use "cat" command to see if everything is fine.
// The cat command in Linux (short for "concatenate") is primarily used to display the contents of one or more files in the terminal.
cat .env
// This shows content of .env file
```

### 3. To fix this issue, we can use pm2.

pm2 (Process Manager 2) is a popular process manager for Node.js applications. It is used to manage and monitor Node.js applications, ensuring they run reliably in production environments.

pm2 simplifies the process of managing Node.js applications by allowing you to start, stop, restart, and monitor multiple Node.js processes with a single command.



```
npm i -g pm2
pm2 start npm --name "test_server" -- start
pm2 ls
pm2 logs test_server

// if you kill the server | exit the server 
pm2 kill

// -- start (there is a space, Keep in mind)
// To test our backend
curl http://localhost:8000
// Note: In our backend we have a route for homepage so we are using it
```


Here's what each part of the command does:

- pm2 start npm: This tells pm2 to use npm as the interpreter.

- -name "test_server": This assigns the name "test_server" to the application.

- -- start: This specifies that you want to run the "start" script defined in your package.json file.


```
pm2 -v
// 5.3.0
```

# Frontant setup

- Go to frontend or client folder. Install all the dependencies and build the project:



```
pnpm i
pnpm build
npm run build
bun run build

// setup environment var
nano .env
// We already have some content in our repo so Edit the vite api url to 
http://localhost:8000 
// Note: To make it easier, please setup your project so that it uses API URL environment variable

// as that's our server
// Ctrl + O and Enter to save
// Ctrl + X to exit
```
Run this command to preview our project:


```
pnpm preview --host
```

Now, Here we can’t see our website page, because of firewall. To make our PORT publicly accessible, we need to follow some steps.

```
sudo ufw allow 4173
```










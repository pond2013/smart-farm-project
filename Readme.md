# Big Boss Smart Farm
This repository contain both front-end and back-end folder.

# Installation

## Front-end
Require Node.js, React
should run the following command
```bash
cd smart-farm-web
npm start
```

## Back-end
Require .NET web api
should run the following command
```bash
cd smart-fram-api
dotnet run
```

## Figma
[urls](https://www.figma.com/file/qlVsocu2vHWCLLYSXjVo59/SPE-project)

## Docker Command
docker build -t smart-farm-api -f Dockerfile . <br />
docker run  -p 8000:80 -d smart-farm-api <br />
http://localhost:8000/api/sample/

## compose
docker-compose up -d
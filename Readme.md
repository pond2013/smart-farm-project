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
[urls](https://www.figma.com/file/7Y2qfgKufuit1nJjDh6YL6/SPE?node-id=0%3A1)

## Docker Command
docker build -t smart-farm-api -f Dockerfile .
docker run  -p 8000:80 -d smart-farm-api
http://localhost:8000/api/sample/
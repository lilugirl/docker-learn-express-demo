#设置基本镜像 node 16
FROM node:16  

# 设置工作目录 （镜像中的目录）
WORKDIR /app

# 复制当前文件package.json到镜像的工作目录 /app下 （.代表工作目录）
COPY package.json .

# 执行npm install
ARG NODE_ENV
RUN if [ "$NODE_ENV"="development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi


# 复制当前目录 到 镜像工作目录 /app下
COPY . ./

ENV PORT 3000
EXPOSE $PORT

# 在container中执行
CMD ["node","index.js"]
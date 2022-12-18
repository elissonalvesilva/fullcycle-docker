FROM golang:latest

WORKDIR /app

COPY main.go .

RUN go build -o main main.go

CMD [ "/app/main" ]
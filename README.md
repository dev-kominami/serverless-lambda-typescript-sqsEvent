# Serverless - AWS Node.js Typescript SQS Event
SQSへのメッセージ追加と、
SQSからイベントをトリガーするLambdaのサンプル

## ローカルで実行する場合
### sqsPushEvent
ローカルで実行する場合は環境変数でsqs queueのURLを指定して実行する

```
sls invoke local -f sqsPushEvent -p src/functions/sqsPushEvent/mock.json --aws-profile {プロファイル} -e sqsQuereUrl={sqsのURL}
```
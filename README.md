# Serverless - AWS Node.js Typescript SQS Event
SQSへのメッセージ追加と、
SQSからイベントをトリガーするLambdaのサンプル

## 環境変数を指定する
slscnf/のymlファイルに環境変数を指定する
ファイルはstageごとに作成する
例）--stage devの場合dev.ymlを参照する

```
sqsQuereUrl: xxxxx
sqsQuereArn: xxxxx
```

## ローカルで実行する場合
### sqsPushEvent
ローカルで実行する場合は環境変数でsqs queueのURLを指定して実行する

```
sls invoke local -f sqsPushEvent -p src/functions/sqsPushEvent/mock.json --aws-profile {プロファイル} -e sqsQuereUrl={sqsのURL}
```

## 注意
serverlessは新しいSQS QUEUEを作成せず、
既存のSQSにイベントを設定する
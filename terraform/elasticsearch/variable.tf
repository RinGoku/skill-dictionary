# IAMユーザー認証済みのAWS CLI経由で処理を行うため、
# Regionの指定のみ行っている(アクセスキーやシークレットキーを指定しない)
provider "aws" {
  region = "ap-northeast-1" # Tokyo
}

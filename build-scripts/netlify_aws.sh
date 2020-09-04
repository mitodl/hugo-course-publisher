mkdir ~/.aws
cat > ~/.aws/config <<EOL
[default]
region = $ENV_DEFAULT_REGION
aws_secret_access_key = $ENV_SECRET_ACCESS_KEY
aws_access_key_id = $ENV_ACCESS_KEY_ID
EOL
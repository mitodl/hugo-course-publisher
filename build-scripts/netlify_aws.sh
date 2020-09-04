mkdir ~/.aws
cat > ~/.aws/config <<EOL
[profile default]
region = $ENV_DEFAULT_REGION
EOL
cat > ~/.aws/credentials <<EOL
[profile default]
aws_secret_access_key = $ENV_SECRET_ACCESS_KEY
aws_access_key_id = $ENV_ACCESS_KEY_ID
EOL
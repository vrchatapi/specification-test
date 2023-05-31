set -e

curl https://raw.githubusercontent.com/vrchatapi/specification/gh-pages/openapi.yaml\
	-o openapi.yaml

rm .cache -rf
mkdir ./.cache

ava reset-cache

./node_modules/.bin/ava --serial > ./.cache/latest.log
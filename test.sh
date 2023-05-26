set -e

curl https://raw.githubusercontent.com/vrchatapi/specification/gh-pages/openapi.yaml\
	-o openapi.yaml

./node_modules/.bin/ava --serial
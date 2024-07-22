echo "switching to branch main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* root@188.166.81.83:/var/www/pocket-geologist/

echo "done"
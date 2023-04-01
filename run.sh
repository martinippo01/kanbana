touch api/.env
echo -n "CHATGPT_KEY=" > api/.env
echo -n "sk-" >> api/.env
echo -n "OE0OTMaCzcqO0VE2DGUNT3Bl" >> api/.env
echo "bkFJaCXL80WJnDxU8B46kXXn" >> api/.env

docker-compose build && docker-compose up

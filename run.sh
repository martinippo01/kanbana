touch api/.env
printf "CHATGPT_KEY=" > api/.env
printf "sk-" >> api/.env
printf "OE0OTMaCzcqO0VE2DGUNT3Bl" >> api/.env
printf "bkFJaCXL80WJnDxU8B46kXXn" >> api/.env

docker-compose build && docker-compose up

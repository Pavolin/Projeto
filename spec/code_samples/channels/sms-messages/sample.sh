curl "https://api.zenvia.com/v1/channels/sms/messages" \
-H "Content-Type: application/json" \
-H "X-API-TOKEN: YOUR_API_TOKEN" \
-d '{
  "from": "sender-identifier",
  "to": "recipient-identifier",
  "contents": [{
    "type": "text",
    "text": "Some text message"
  }]
}'

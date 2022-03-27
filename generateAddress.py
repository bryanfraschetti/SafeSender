import secrets
import json

userAddress=secrets.token_urlsafe(16)
print(json.dumps(userAddress))
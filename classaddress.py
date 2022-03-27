import secrets
import bcrypt

class Users():
    def __init__(self, pw):
        self.useraddress = pw
        self.hashaddr = (bcrypt.hashpw(pw.encode('utf8'), bcrypt.gensalt())).decode('utf8')

    def check_password(self, pw):
        if self.useraddress is not None:
            expected_hash = self.hashaddr.encode('utf8')
            return bcrypt.checkpw(pw.encode('utf8'), expected_hash)
        return False

test=secrets.token_urlsafe(16)
user1 = Users(test)
print(user1.useraddress)
print(user1.hashaddr)
print(user1.check_password(test))
import jwt


class AuthHelper:
    SECRET_KEY = "3rhgUJWPu0tR5Dlw"

    @classmethod
    def generate_token(cls, user_id: id):
        payload = {"user_id": user_id}
        token = jwt.encode(payload, cls.SECRET_KEY, algorithm="HS256")

        return token


import sqlite3


class DBHelper:
    def __init__(self, db_name):
        self.conn = sqlite3.connect(db_name)
        self.cursor = self.conn.cursor()

    def execute_query(self, query, fetch=False, params=()):
        try:
            if len(params) == 0:
                self.cursor.execute(query)
            else:
                self.cursor.execute(query, params)
            if fetch:
                result = self.cursor.fetchall()
                return result
            else:
                self.conn.commit()
        except sqlite3.Error as e:
            print("Query failed: " + str(e))

    def close_connection(self):
        self.conn.close()


if __name__ == "__main__":
    db = DBHelper('database.db')
    create_table_user_sql = """
            CREATE TABLE IF NOT EXISTS user (
                cpf TEXT,
                email TEXT,
                name TEXT,
                password TEXT,
                phone TEXT,
                cep TEXT,
                num_res INTEGER,
                comp TEXT,
                CONSTRAINT pk_user PRIMARY KEY (cpf),
                CONSTRAINT user_email_unique UNIQUE (email)
            )
        """
    db.cursor.execute(create_table_user_sql)

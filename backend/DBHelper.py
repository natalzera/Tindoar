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

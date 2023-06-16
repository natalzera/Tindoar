import sqlite3

class DBHelper:
    def __init__(self, db_name):
        self.conn = sqlite3.connect(db_name)
        self.cursor = self.conn.cursor()

    def create_table(self, table_name, columns):
        columns_str = ', '.join(columns)
        create_table_query = f"CREATE TABLE IF NOT EXISTS {table_name} ({columns_str})"
        self.cursor.execute(create_table_query)
        self.conn.commit()

    def insert_data(self, table_name, values):
        placeholders = ', '.join(['?' for _ in values])
        insert_query = f"INSERT INTO {table_name} VALUES ({placeholders})"
        self.cursor.execute(insert_query, values)
        self.conn.commit()

    def select_data(self, table_name):
        select_query = f"SELECT * FROM {table_name}"
        self.cursor.execute(select_query)
        rows = self.cursor.fetchall()
        return rows

    def close_connection(self):
        self.conn.close()

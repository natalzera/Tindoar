import sqlite3
class DBHelper:
    DB_FILE = 'database.db'

    @classmethod
    def execute_query(cls, query, fetch=False, params=()):
        with sqlite3.connect(cls.DB_FILE) as conn:
            try:
                cursor = conn.cursor()
                if len(params) == 0:
                    cursor.execute(query)
                else:
                    cursor.execute(query, params)
                if fetch:
                    result = cursor.fetchall()
                    return result
                else:
                    conn.commit()
            except sqlite3.Error as e:
                print("Query failed: " + str(e))


if __name__ == "__main__":
    db = DBHelper
    create_table_client_sql = """
            CREATE TABLE IF NOT EXISTS client (
                cpf TEXT,
                email TEXT,
                name TEXT,
                password TEXT,
                phone TEXT,
                cep TEXT,
                num_res INTEGER,
                comp TEXT,
                CONSTRAINT pk_client PRIMARY KEY (cpf),
                CONSTRAINT client_email_unique UNIQUE (email)
            )
        """
    create_table_entity_sql = """
            CREATE TABLE IF NOT EXISTS entity (
                cnpj TEXT,
                email TEXT,
                name TEXT,
                password TEXT,
                phone TEXT,
                cep TEXT,
                num_res INTEGER,
                comp TEXT,
                CONSTRAINT pk_user PRIMARY KEY (cnpj),
                CONSTRAINT user_email_unique UNIQUE (email)
            )
        """

    with sqlite3.connect(DBHelper.DB_FILE) as conn:
        conn.cursor().execute(create_table_client_sql)
        conn.cursor().execute(create_table_entity_sql)

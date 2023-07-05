class DonationsHelper:
    @staticmethod
    def get_donations():
        donations = [
            {
                'donor_id': 1,
                'item_name': 'Sofá',
                'creation_date': '2023-07-04',
                'item_description': 'Sofá confortável em bom estado. Perfeito para relaxar e assistir filmes em família. A cor é marrom e as dimensões são 2 metros de comprimento por 1 metro de largura.',
                'image_link': 'https://example.com/images/sofa.jpg'
            },
            {
                'donor_id': 2,
                'item_name': 'Camiseta',
                'creation_date': '2023-07-03',
                'item_description': 'Camiseta de algodão macio e confortável. Tamanho M e cor azul. Ideal para uso casual. Ótima opção para o dia a dia.',
                'image_link': 'https://example.com/images/camiseta.jpg'
            },
            {
                'donor_id': 3,
                'item_name': 'Cadeira',
                'creation_date': '2023-07-02',
                'item_description': 'Cadeira de escritório ergonômica com rodinhas. Possui ajuste de altura e encosto reclinável. Perfeita para longas horas de trabalho ou estudo.',
                'image_link': 'https://example.com/images/cadeira.jpg'
            },
            {
                'donor_id': 4,
                'item_name': 'Calça jeans',
                'creation_date': '2023-07-01',
                'item_description': 'Calça jeans de alta qualidade. Tamanho 34, cor azul claro. Combina estilo e conforto. Perfeita para diversas ocasiões.',
                'image_link': 'https://example.com/images/calca.jpg'
            },
            {
                'donor_id': 5,
                'item_name': 'Bola de futebol',
                'creation_date': '2023-06-30',
                'item_description': 'Bola de futebol oficial de tamanho 5. Feita de couro sintético durável e resistente. Ideal para jogos e treinamentos. Adequada para gramados e quadras.',
                'image_link': 'https://example.com/images/bola.jpg'
            }
        ]

        return donations

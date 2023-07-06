class DonationsHelper:
    @staticmethod
    def get_donations():
        donations = [
            {
                'id': 1,
                'name': "José Pedro",
                'item_name': 'Sofá',
                'creation_date': '2023-07-04',
                'item_description': 'Sofá confortável em bom estado. Perfeito para relaxar e assistir filmes em família. A cor é marrom e as dimensões são 2 metros de comprimento por 1 metro de largura.',
                'image_link': 'https://d2r9epyceweg5n.cloudfront.net/stores/001/945/999/products/sofa-retratil-3-lugares-havai-veludinho-marrom-2-11-fa5ba185063f4137bd16372667073676-480-0.jpg'
            },
            {
                'id': 2,
                'name': "João",
                'item_name': 'Camiseta Azul',
                'creation_date': '2023-07-03',
                'item_description': 'Camiseta de algodão macio e confortável. Tamanho M e cor azul. Ideal para uso casual. Ótima opção para o dia a dia.',
                'image_link': 'https://photos.enjoei.com.br/camiseta-azul-usada-62722727/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy84OTE1NjE3Lzc3ZjY4YWM5MDg3YWNkNjFkYWExZGRjYzYzNTgxYTkzLmpwZw'
            },
            {
                'id': 3,
                'name': "Augusta",
                'item_name': 'Cadeira',
                'creation_date': '2023-07-02',
                'item_description': 'Cadeira de escritório ergonômica com rodinhas. Possui ajuste de altura e encosto reclinável. Perfeita para longas horas de trabalho ou estudo.',
                'image_link': 'https://http2.mlstatic.com/D_NQ_NP_673545-MLB50020044127_052022-W.webp'
            },
            {
                'id': 4,
                'name': "Cassandra Maria",
                'item_name': 'Calça jeans',
                'creation_date': '2023-07-01',
                'item_description': 'Calça jeans de alta qualidade. Tamanho 34, cor azul claro. Combina estilo e conforto. Perfeita para diversas ocasiões.',
                'image_link': 'https://s3-sa-east-1.amazonaws.com/loja2/78c8c2b0eecc5e2a16aece72af408d95.jpg'
            },
            {
                'id': 5,
                'name': "Miguel Tancredo Neves Antunes da Silva Rodrigues Oliveira dos Santos Jesus",
                'item_name': 'Bola de futebol',
                'creation_date': '2023-06-30',
                'item_description': 'Bola de futebol oficial de tamanho 5. Feita de couro sintético durável e resistente. Ideal para jogos e treinamentos. Adequada para gramados e quadras.',
                'image_link': 'https://photos.enjoei.com.br/bola-de-futebol-size-5-84055162/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xNDcyMzAxMi9hYzUxMjk5OWRjMzEzMDQ4ZGU0NDk5ZGNlNTRmY2NmYS5qcGc'
            }
        ]

        return donations
    
    @staticmethod
    def get_donations_request():
        donation_requests =  [
            {
                'id': 1,
                'name': "Casa da esperança nova",
                'item_name': 'Cobertores',
                'creation_date': '2023-07-04',
                'item_description': 'Precisamos de cobertores quentes para nosso abrigo de desabrigados. Qualquer tamanho e tipo de cobertor será muito apreciado.',
                'image_link': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Santa-casa-recife.jpg/1200px-Santa-casa-recife.jpg'
            },
            {
                'id': 2,
                'name': "Centro de doação calçado josé",
                'item_name': 'Alimentos Enlatados',
                'creation_date': '2023-07-03',
                'item_description': 'Nosso banco de alimentos comunitário precisa de alimentos enlatados para apoiar famílias necessitadas. Doações de alimentos não perecíveis podem fazer uma diferença significativa na redução da fome.',
                'image_link': 'data:image/jpeg;base64,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'
            },
            {
                'id': 3,
                'name': "Centro de reabilitação São João",
                'item_name': 'Livros Infantis',
                'creation_date': '2023-07-02',
                'item_description': 'Estamos buscando doações de livros infantis para nossa biblioteca local. Sua contribuição pode ajudar a promover o amor pela leitura e fornecer recursos educacionais para jovens mentes.',
                'image_link': 'https://jornalzonasul.com.br/wp-content/uploads/2015/12/Foto-6.jpg'
            },
            {
                'id': 4,
                'name': "Centro de reabilitação Maria josé",
                'item_name': 'Material Escolar',
                'creation_date': '2023-07-01',
                'item_description': 'Nossa organização apoia estudantes carentes que precisam de material escolar. Doações de mochilas, cadernos, canetas e outros itens essenciais podem capacitar as crianças a terem sucesso acadêmico.',
                'image_link': 'https://1.bp.blogspot.com/-DP71xszN9oc/W9P5EO4NIHI/AAAAAAAAPew/xZHMCiA2Jc8pwQ8vLgPcgxr8aWOoECFZACEwYBhgL/s1600/Irmandade%2Bda%2BSanta%2BCasa%2Bde%2BMiseric%25C3%25B3rdia%2Bde%2BS%25C3%25A3o%2BPaulo.jpg'
            },
            {
                'id': 5,
                'name': "Casa de Nazaré",
                'item_name': 'Casacos de Inverno',
                'creation_date': '2023-06-30',
                'item_description': 'Estamos arrecadando casacos de inverno para famílias de baixa renda que têm dificuldade em se manter aquecidas durante os meses mais frios. Doações de todos os tamanhos, desde crianças até adultos, são bem-vindas.',
                'image_link': 'https://saude.sp.gov.br/resources/ouvidoria-central-sessp/nova-pasta-de-midia/centroreabilitacaodecasabranca-crcb.jpg'
            }
        ]

        return donation_requests

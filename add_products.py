import requests
import json
import random


for i in range(1):
    print(i)
    size_amounts = {'xxs': random.randint(0, 75),
                    'xs': random.randint(0, 75),  
                    's': random.randint(0, 75),
                    'm': random.randint(0, 75),
                    'l': random.randint(0, 75),
                    'xl': random.randint(0, 75),
                    'xxl': random.randint(0, 75)}


    params = {'productName': f'Product {i}',
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              'imgUrl': 'https://images.unsplash.com/photo-1651761179569-4ba2aa054997?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'sizeAmount': json.dumps(size_amounts),
              'price': random.randint(10, 200)}


    URL = 'http://localhost:8000/api/add_product.php'
    request = requests.post(URL, params)
    print(request.status_code)
    print(request.text)


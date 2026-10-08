from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains

import time
from dotenv import load_dotenv
import os
import random

load_dotenv()
url = 'http://localhost:8000/'
username = os.getenv('DB_ADMIN_USER')
password= os.getenv('DB_ADMIN_PASSWORD')

sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', '3xl']
for product in range(10):
    product_code = random.randint(1000000000,
                                  9999999999)
    price = random.randint(1, 100)
    for size in sizes:
        driver = webdriver.Firefox()

        driver.get(f'{url}log-in.php')
        driver.find_element(By.ID, 'floatingInput').send_keys(username)
        driver.find_element(By.ID, 'floatingPassword').send_keys(password)
        driver.find_element(By.ID, 'logInBtn').click()

        driver.get(f'{url}add-product.php')
        driver.find_element(By.ID, 'productName').send_keys(f'PLACEHOLDER {product_code}')
        driver.find_element(By.ID, 'description').send_keys('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        driver.find_element(By.ID, 'code').send_keys(product_code)
        driver.find_element(By.ID, 'imgUrl').send_keys('https://images.unsplash.com/photo-1651761179569-4ba2aa054997?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
        driver.find_element(By.ID, 'size').send_keys(size)
        driver.find_element(By.ID, 'amount').send_keys(random.randint(1, 100))
        driver.find_element(By.ID, 'price').send_keys(price)
        driver.find_element(By.ID, 'submit').click()

        driver.close()


#Soma SimplesEscreva um programa que solicite dois números inteiros ao usuário e exiba a soma desses dois números.
#Modulo instalado para receber dados do usuario#


def calculo():
    user1 = int(input("Digite um numero: "))
    user2 = int(input("Digite outro numero: "))
    x = user1 + user2
    result = print(f" A soma entre esses numeros é  de {x}")

    return result


calculo()


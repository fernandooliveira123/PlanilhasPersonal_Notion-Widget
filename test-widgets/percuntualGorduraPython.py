#Percentual de gordura Pollock 3 dobras

idade = int(input("Insira sua idade: "))
sexo= input("Insira M ou F: ")
protocolo = input("Escolha o protocolo, 3 ou 7 dpbras? digite apenas o nº: ")

if sexo == "M":
    print("insira as dobras cutaneas")

    if protocolo == "3":
        peitoral = float(input("Dobra Peitoral: " ))
        abdomem = float(input("Dobra cutanea abdominal: "))
        coxamedia = float(input("Dobra coxa média: "))

        somatorioDobras = peitoral + abdomem + coxamedia 
        densidade =  1.109380 - (0.0008267 * somatorioDobras) + (0.0000016 * somatorioDobras ** 2) - (0.0002575 * idade) #Jackson & Pollock (1978 apud Heyward, 200)
        percentualGordura = (4.95 / densidade - 4.5) * 100
        print( f"Seu percentual de gordura é: {percentualGordura:.2f}%")

    elif protocolo == "7":
        peitoral = float(input("Dobra Peitoral (mm): "))
        abdominal = float(input("Dobra Abdominal (mm): "))
        coxa = float(input("Dobra Coxa Média (mm): "))
        triceps = float(input("Dobra Tricipital (mm): "))
        subescapular = float(input("Dobra Subescapular (mm): "))
        axilar = float(input("Dobra Axilar Média (mm): "))
        suprailiaca = float(input("Dobra Supra-ilíaca (mm): "))
        somatorio = peitoral + abdominal + coxa + triceps + subescapular + axilar + suprailiaca
        densidade = 1.112 - (0.00043499 * somatorio) + (0.00000055 * somatorio ** 2) - (0.00028826 * idade) #Jackson & Pollock (1978 apud Heyward, 200)
        percentualGordura = (4.95 / densidade - 4.5) * 100
        print( f"Seu percentual de gordura é: {percentualGordura:.2f}%")


elif sexo == "F":
     print("insira as dobras cutaneas")
     
     if protocolo == "3":
        triceps = float(input("insira a dobra Tríciptal: "))
        suprailiaca = float(input("Insira a dobra Supra-ilíaca: "))
        coxamedia  = float(input("insira a dobra cutanea coxa média: "))
     
        somatorioDobras = triceps + suprailiaca + coxamedia 
        densidade = 1.0994921 - (0.0009929 * somatorioDobras) + (0.0000023 * somatorioDobras **2) -  (0.0001392 * idade) #Jackson & Pollock (1980 apud Heyward, 200)
        percentualGordura = (4.95/ densidade - 4.5) * 100

        print( f"Seu percentual de gordura é: {percentualGordura:.2f}%")

    
     elif protocolo =="7":
        triceps = float(input("Dobra Tricipital (mm): "))
        subescapular = float(input("Dobra Subescapular (mm): "))
        peitoral = float(input("Dobra Peitoral (mm): "))
        abdominal = float(input("Dobra Abdominal (mm): "))
        coxa = float(input("Dobra Coxa Média (mm): "))
        suprailiaca = float(input("Dobra Supra-ilíaca (mm): "))
        axilar = float(input("Dobra Axilar Média (mm): "))
        somatorio = triceps + subescapular + peitoral + abdominal + coxa + suprailiaca + axilar
        densidade = 1.0970 - (0.00046971 * somatorio) + (0.00000056 * somatorio ** 2) - (0.00012828 * idade)
        percentualGordura = (4.95/ densidade - 4.5) * 100

        print( f"Seu percentual de gordura é: {percentualGordura:.2f}%")


    
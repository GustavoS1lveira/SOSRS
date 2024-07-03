function checkSymptoms() {
    const symptoms = document.querySelectorAll('input[name="symptoms"]:checked'); // Seleciona todos os checkboxes de sintomas que estão marcados
    let diseases = new Set(); // Cria um conjunto para armazenar as doenças identificadas

    symptoms.forEach(symptom => {
        switch (symptom.value) { // Verifica o valor do checkbox marcado
            case 'febre-alta':
            case 'dor-de-cabeca':
            case 'sangramentos':
            case 'dor-muscular':
            case 'calafrios':
            case 'olhos-vermelhos':
            case 'vomitos':
            case 'dor-na-panturrilha-lombar':
                diseases.add('Leptospirose'); // Adiciona Leptospirose ao conjunto de doenças
                break;
            case 'contracoes-musculares':
            case 'dificuldade-respirar':
            case 'pressao-alta':
            case 'sudorese':
                diseases.add('Tétano'); // Adiciona Tétano ao conjunto de doenças
                break;
            case 'sangramentos-fezes':
            case 'dores-abdominais':
                diseases.add('Diarreia aguda'); // Adiciona Diarreia aguda ao conjunto de doenças
                break;
            case 'fadiga':
            case 'ictericia':
            case 'urina-escura':
            case 'fezes-claras':
            case 'perda-de-apetite':
                diseases.add('Hepatite A'); // Adiciona Hepatite A ao conjunto de doenças
                break;
            case 'febre-alta':
            case 'dor-muscular':
            case 'erupcoes-cutaneas':
            case 'dores-nas-articulacoes':
            case 'hemorragia-intensa':
            case 'dificuldade-respirar':
            case 'edema':
            case 'rubor':
                diseases.add('Dengue'); // Adiciona Dengue ao conjunto de doenças
                break;
            case 'lugares-umidos-escuros':
            case 'entulhos-ou-destrocos':
                diseases.add('Animais peçonhentos'); // Adiciona Animais peçonhentos ao conjunto de doenças
                break;
            default:
                break;
        }
    });

    displayResults(diseases); // Chama a função para exibir os resultados
}

function displayResults(diseases) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpa qualquer resultado anterior

    if (diseases.size === 0) {
        resultDiv.innerHTML = '<p>Nenhuma doença identificada com base nos sintomas selecionados.</p>'; // Exibe mensagem se nenhuma doença for identificada
    } else {
        resultDiv.innerHTML = '<p>Doenças identificadas com base nos sintomas selecionados:</p>';
        const ul = document.createElement('ul'); // Cria uma lista não ordenada
        diseases.forEach(disease => {
            const li = document.createElement('li'); // Cria um item de lista para cada doença
            li.textContent = disease; // Define o texto do item de lista como o nome da doença
            ul.appendChild(li); // Adiciona o item de lista à lista não ordenada
        });
        resultDiv.appendChild(ul); // Adiciona a lista não ordenada à div de resultados
    }
}

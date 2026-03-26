const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/',(req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca',(req, res) => {

    const lista = [
        {
            titolo:'Ciambellone',
            contenuto:'contenuto del ciambellone',
            immagine:'images/ciambellone.jpeg',
            tags: [
                'buono',
                'buonissimo',
                'veloce'
            ]
        },
        {
            titolo:'Cracker barbabietola',
            contenuto:'contenuto del cracker barbabietola',
            immagine:'/images/cracker_barbabietola.jpeg',
            tags: [
                'buono',
                'buonissimo',
                'veloce'
            ]
        },
        {
            titolo:'Pane fritto dolce',
            contenuto:'contenuto del pane fritto dolce',
            immagine:'images/pane_fritto_dolce.jpeg',
            tags: [
                'buono',
                'buonissimo',
                'veloce'
            ]
        },
        {
            titolo:'Pasta barbabietola',
            contenuto:'contenuto della pasta barbabietola',
            immagine:'images/pasta_barbabietola',
            tags: [
                'buono',
                'buonissimo',
                'veloce'
            ]
        },
        {
            titolo:'Torta paesana',
            contenuto:'contenuto della torta paesana',
            immagine:'images/torta_paesana',
            tags: [
                'buono',
                'buonissimo',
                'veloce'
            ]
        }
    ]

    res.json(lista)
})

app.listen(port,() => {
    console.log('ciao')
})
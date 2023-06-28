import Exercise from 'src/core/exercise/model/exercise.model'

export const exercisesMock: Exercise[] = [
  {
    name: 'Prancha',
    muscle: 'Abdômen',
    equipment: 'Nenhum',
    level: 'Iniciante',
    videoUrls: {
      ptBr: 'https://www.youtube.com/watch?v=BBwVpXXv6qY',
      en: 'https://www.youtube.com/watch?v=AHlD1iYgB9c'
    },
    imageUrl: 'https://exemplo.com/prancha.jpg',
    instructions: [
      'Deite-se de bruços, com as pernas estendidas e as mãos apoiadas no chão na altura dos ombros.',
      'Levante o corpo do chão, apoiando-se apenas nos antebraços e nos dedos dos pés.',
      'Mantenha a posição por 30 segundos a 1 minuto, respirando normalmente.',
      'Retorne à posição inicial e descanse por 30 segundos a 1 minuto antes de repetir.'
    ],
    id: '271ed917-58aa-4611-bb3f-52c344668e87'
  },
  {
    name: 'Crunch',
    muscle: 'Abdômen',
    equipment: 'Nenhum',
    level: 'Iniciante',
    videoUrls: {
      ptBr: 'https://www.youtube.com/watch?v=hyv14e2QDq0',
      en: 'https://www.youtube.com/watch?v=Xyd_fa5zoEU'
    },
    imageUrl: 'https://exemplo.com/crunch.jpg',
    instructions: [
      'Deite-se de costas, com as pernas dobradas e os pés apoiados no chão.',
      'Coloque as mãos atrás da cabeça, sem puxar o pescoço para cima.',
      'Levante a cabeça e os ombros do chão, contraindo os músculos abdominais.',
      'Mantenha a posição por 1 a 2 segundos e retorne à posição inicial.'
    ],
    id: '9b187024-50fa-46c8-accb-ee9b0b85846e'
  },
  {
    name: 'Mountain climber',
    muscle: 'Abdômen',
    equipment: 'Nenhum',
    level: 'Intermediário',
    videoUrls: {
      ptBr: 'https://www.youtube.com/watch?v=FiPhezDx2GQ',
      en: 'https://www.youtube.com/watch?v=nmwgirgXLYM'
    },
    imageUrl: 'https://exemplo.com/mountain-climber.jpg',
    instructions: [
      'Fique em posição de prancha, com as mãos apoiadas no chão na altura dos ombros e o corpo estendido.',
      'Puxe o joelho direito em direção ao peito, mantendo a posição da prancha com a perna esquerda.',
      'Retorne à posição inicial e repita com a perna esquerda.',
      'Continue alternando as pernas o mais rápido que puder, mantendo a posição de prancha.'
    ],
    id: '24c95c42-9212-42b0-bf2f-dd2d9364a864'
  },
  {
    name: 'Abdominal no solo',
    muscle: 'Abdômen',
    equipment: 'Nenhum',
    level: 'Iniciante',
    videoUrls: {
      ptBr: 'https://www.youtube.com/watch?v=Tk-1tWN4_l0',
      en: 'https://www.youtube.com/watch?v=YvS6VyO-4ZE'
    },
    imageUrl: 'https://exemplo.com/abdominal-solo.jpg',
    instructions: [
      'Deite-se de costas com as pernas flexionadas e os pés apoiados no chão.',
      'Coloque as mãos atrás da cabeça e mantenha os cotovelos para fora.',
      'Levante o tronco do chão, contraindo os músculos abdominais.',
      'Retorne à posição inicial de forma controlada.'
    ],
    id: 'b87b464c-248d-4d75-945f-cf1423a29a17'
  },
  {
    name: 'Prancha frontal',
    muscle: 'Abdômen',
    equipment: 'Nenhum',
    level: 'Iniciante',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
      ptBr: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
    },
    imageUrl: 'https://exemplo.com/prancha-frontal.jpg',
    instructions: [
      'Comece na posição de flexão de braço, com os cotovelos dobrados em um ângulo de 90 graus e antebraços apoiados no chão.',
      'Mantenha as pernas retas e juntas e os pés apoiados no chão.',
      'Mantenha o abdômen e os glúteos contraídos e a coluna alinhada.',
      'Mantenha essa posição por 30 segundos ou mais.'
    ],
    id: 'fd64c33d-c211-4743-abb6-79a6435f9ee1'
  },
  {
    name: 'Remada curvada com barra',
    muscle: 'Costas',
    equipment: 'Barra',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=_ZFjHC8I0-k',
      ptBr: 'https://www.youtube.com/watch?v=an7j8c5gnBY'
    },
    imageUrl: 'https://exemplo.com/remada-curvada-com-barra.jpg',
    instructions: [
      'Posicione-se em pé segurando a barra com as mãos afastadas na largura dos ombros.',
      'Flexione levemente os joelhos, mantendo as costas retas e o core engajado.',
      'Leve a barra em direção ao seu corpo, mantendo os cotovelos próximos ao tronco.',
      'Retorne a barra à posição inicial de forma controlada.'
    ],
    id: '4c5b3b11-c72d-44d8-b736-6b00b0482eaf'
  },
  {
    name: 'Barra fixa',
    muscle: 'Costas',
    equipment: 'Barra fixa',
    level: 'Avançado',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=JqeQvFQxIig',
      ptBr: 'https://www.youtube.com/watch?v=JqeQvFQxIig'
    },
    imageUrl: 'https://exemplo.com/barra-fixa.jpg',
    instructions: [
      'Segure a barra com as mãos na largura dos ombros, com as palmas voltadas para longe do corpo.',
      'Mantenha as escápulas para baixo e para trás, e o core engajado.',
      'Puxe o corpo para cima até que o queixo ultrapasse a barra.',
      'Desça o corpo de forma controlada até a posição inicial.'
    ],
    id: '44f8002f-4775-4b1d-8359-425f862733e1'
  },
  {
    name: 'Puxada alta com triângulo',
    muscle: 'Costas',
    equipment: 'Polia',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=2QvJ5Oxsz8M',
      ptBr: 'https://www.youtube.com/watch?v=2QvJ5Oxsz8M'
    },
    imageUrl: 'https://exemplo.com/puxada-alta-com-triangulo.jpg',
    instructions: [
      'Em pé na frente da máquina de polia, segure o triângulo com as duas mãos.',
      'Mantenha as costas retas e o core engajado.',
      'Puxe o triângulo em direção ao seu peito, mantendo os cotovelos para baixo e próximos ao tronco.',
      'Retorne o triângulo à posição inicial de forma controlada.'
    ],
    id: 'b5dc4ee0-91a2-4464-ba91-304b2b76ad08'
  },
  {
    name: 'Rosca direta com barra',
    muscle: 'Bíceps',
    equipment: 'Barra',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=Oy8newuZkAI',
      ptBr: 'https://www.youtube.com/watch?v=Y0NlJt3qCDg'
    },
    imageUrl: 'https://exemplo.com/rosca-direta-com-barra.jpg',
    instructions: [
      'Fique em pé com as pernas afastadas na largura dos ombros e segure a barra com as palmas voltadas para cima.',
      'Mantenha os cotovelos próximos ao tronco e levante a barra em direção ao seu peito.',
      'Pause brevemente antes de abaixar a barra de volta à posição inicial.'
    ],
    id: '623ee520-dc6e-40de-9e2b-48ef5adf839e'
  },
  {
    name: 'Rosca concentrada',
    muscle: 'Bíceps',
    equipment: 'Halteres',
    level: 'Iniciante',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=WJMyzYlhPfc',
      ptBr: 'https://www.youtube.com/watch?v=fnoV8itJk-Y'
    },
    imageUrl: 'https://exemplo.com/rosca-concentrada.jpg',
    instructions: [
      'Sente-se em um banco com as pernas afastadas e os pés apoiados no chão.',
      'Segure um haltere com uma das mãos e apoie o cotovelo no interior da coxa.',
      'Mantenha o braço estendido e levante o haltere em direção ao seu ombro.',
      'Pause brevemente antes de abaixar o haltere de volta à posição inicial.'
    ],
    id: 'bdc29f5c-4a71-48e0-977a-62152deb825e'
  },
  {
    name: 'Rosca inversa',
    muscle: 'Bíceps',
    equipment: 'Barra',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=1B2S6VX9jMo',
      ptBr: 'https://www.youtube.com/watch?v=Ou-k7Vfv-6k'
    },
    imageUrl: 'https://exemplo.com/rosca-inversa.jpg',
    instructions: [
      'Fique em pé com as pernas afastadas na largura dos ombros e segure a barra com as palmas voltadas para baixo.',
      'Mantenha os cotovelos próximos ao tronco e levante a barra em direção ao seu peito.',
      'Pause brevemente antes de abaixar a barra de volta à posição inicial.'
    ],
    id: '134f9d09-249b-4468-af45-99fd5616d791'
  },
  {
    name: 'Elevação de panturrilha em pé',
    muscle: 'Panturrilha',
    equipment: 'Máquina ou Halteres',
    level: 'Iniciante',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=h4vnq3XH8sQ',
      ptBr: 'https://www.youtube.com/watch?v=TJ6e_-v6ydI'
    },
    imageUrl: 'https://exemplo.com/elevacao-de-panturrilha-em-pe.jpg',
    instructions: [
      'Fique em pé na máquina ou segurando halteres, com as pontas dos pés apoiadas na plataforma ou no chão.',
      'Eleve os calcanhares o máximo possível, contraindo as panturrilhas.',
      'Segure por um segundo no topo e, em seguida, desça os calcanhares para a posição inicial.'
    ],
    id: 'd784afad-01a9-4b23-b1ca-7e5efed46725'
  },
  {
    name: 'Elevação de panturrilha sentado',
    muscle: 'Panturrilha',
    equipment: 'Máquina',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=r8V7yJYbcuo',
      ptBr: 'https://www.youtube.com/watch?v=Jd0wHZLxw6Y'
    },
    imageUrl: 'https://exemplo.com/elevacao-de-panturrilha-sentado.jpg',
    instructions: [
      'Sente-se na máquina com as coxas apoiadas na almofada e as pontas dos pés na plataforma.',
      'Eleve os calcanhares o máximo possível, contraindo as panturrilhas.',
      'Segure por um segundo no topo e, em seguida, desça os calcanhares para a posição inicial.'
    ],
    id: 'a42ceb89-002f-4d13-84fb-bf0dce3703e2'
  },
  {
    name: 'Saltos',
    muscle: 'Panturrilha',
    equipment: 'Nenhum',
    level: 'Iniciante',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=FN3l6-yr4sE',
      ptBr: 'https://www.youtube.com/watch?v=FN3l6-yr4sE'
    },
    imageUrl: 'https://exemplo.com/saltos.jpg',
    instructions: [
      'Fique em pé com os pés na largura dos ombros.',
      'Flexione os joelhos e salte o mais alto possível.',
      'Ao pousar, concentre-se em usar as panturrilhas para desacelerar a queda e aterrissar com segurança.'
    ],
    id: '2463369c-5a52-4f4f-bb27-acb7a3847a26'
  },
  {
    name: 'Supino reto com barra',
    muscle: 'Peito',
    equipment: 'Barra',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=nmwgirgXLYM',
      ptBr: 'https://www.youtube.com/watch?v=5c1jHuCv2SU'
    },
    imageUrl: 'https://exemplo.com/supino-recto-com-barra.jpg',
    instructions: [
      'Deite em um banco plano com os pés no chão e as costas apoiadas no banco.',
      'Segure a barra com as mãos na largura dos ombros e levante-a acima do peito.',
      'Abaixe a barra em direção ao peito, mantendo os cotovelos próximos ao corpo.',
      'Empurre a barra de volta à posição inicial, mantendo os pés firmes no chão.'
    ],
    id: '95fbf076-2223-44b7-a640-c6a3621d6abe'
  },
  {
    name: 'Flexão de braço',
    muscle: 'Peito',
    equipment: 'Nenhum',
    level: 'Iniciante',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=Eh00_rniF8E',
      ptBr: 'https://www.youtube.com/watch?v=Wv2fXWgAQIY'
    },
    imageUrl: 'https://exemplo.com/flexao-de-braco.jpg',
    instructions: [
      'Deite em posição de prancha com as mãos na largura dos ombros e os dedos apontados para a frente.',
      'Mantenha o corpo em linha reta e o core engajado.',
      'Dobre os cotovelos para baixo até que o peito esteja perto do chão.',
      'Empurre o corpo de volta à posição inicial, mantendo os cotovelos próximos ao corpo.'
    ],
    id: 'e6336472-4741-4499-932f-f9e8c99ec37d'
  },
  {
    name: 'Supino inclinado com halteres',
    muscle: 'Peito',
    equipment: 'Halteres',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=JJ1f9K0-mv4',
      ptBr: 'https://www.youtube.com/watch?v=cmgOKKx5YAo'
    },
    imageUrl: 'https://exemplo.com/supino-inclinado-com-halteres.jpg',
    instructions: [
      'Deite em um banco inclinado com os pés firmes no chão.',
      'Segure um halter em cada mão com os braços estendidos acima do peito.',
      'Abaixe os halteres em direção ao peito, mantendo os cotovelos próximos ao corpo.',
      'Empurre os halteres de volta à posição inicial, mantendo os pés firmes no chão.'
    ],
    id: 'a4a2f6f7-ed70-41c2-b103-2729861e1446'
  },
  {
    name: 'Stiff',
    muscle: 'Posterior de coxa',
    equipment: 'Barra',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=1V5fS8vJ8TE',
      ptBr: 'https://www.youtube.com/watch?v=Jz2I5U5G5zw'
    },
    imageUrl: 'https://exemplo.com/stiff.jpg',
    instructions: [
      'Segure a barra com as mãos afastadas na largura dos ombros.',
      'Posicione os pés afastados na largura dos ombros.',
      'Mantenha as costas retas e o core engajado.',
      'Incline o tronco para frente, mantendo a barra próxima às coxas.',
      'Retorne o tronco à posição inicial de forma controlada.'
    ],
    id: 'ca4d9ffc-1a92-4d4d-8b7f-84fc1cf0b22b'
  },
  {
    name: 'Flexão de pernas deitado',
    muscle: 'Posterior de coxa',
    equipment: 'Máquina de flexão de pernas',
    level: 'Iniciante',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=yJDIc7syngc',
      ptBr: 'https://www.youtube.com/watch?v=U5GnU5APNv4'
    },
    imageUrl: 'https://exemplo.com/flexao-pernas-deitado.jpg',
    instructions: [
      'Deite-se de barriga para baixo na máquina de flexão de pernas.',
      'Ajuste o encosto de acordo com a sua altura e posicione as almofadas na parte de trás dos tornozelos.',
      'Mantenha as costas retas e o core engajado.',
      'Flexione as pernas até que os joelhos estejam próximos ao seu corpo.',
      'Retorne as pernas à posição inicial de forma controlada.'
    ],
    id: '7dc265b3-c7e1-40e2-b55a-9b51064a485e'
  },
  {
    name: 'Mesa flexora',
    muscle: 'Posterior de coxa',
    equipment: 'Máquina de mesa flexora',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=ngTk-sCYf-E',
      ptBr: 'https://www.youtube.com/watch?v=fmQ2vLG8XjU'
    },
    imageUrl: 'https://exemplo.com/mesa-flexora.jpg',
    instructions: [
      'Sente-se na máquina de mesa flexora com as pernas estendidas.',
      'Ajuste o encosto de acordo com a sua altura e posicione as almofadas na parte de trás dos tornozelos.',
      'Mantenha as costas retas e o core engajado.',
      'Flexione as pernas, levantando o peso com os músculos da parte de trás das coxas.',
      'Retorne as pernas à posição inicial de forma controlada.'
    ],
    id: '55428908-94d4-44ab-a5f5-14c611e9878c'
  },
  {
    name: 'Agachamento com barra',
    muscle: 'Quadríceps',
    equipment: 'Barra',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=U3H_XDjHkU0',
      ptBr: 'https://www.youtube.com/watch?v=U3H_XDjHkU0'
    },
    imageUrl: 'https://exemplo.com/agachamento-com-barra.jpg',
    instructions: [
      'Posicione-se em pé segurando a barra com as mãos afastadas na largura dos ombros.',
      'Flexione levemente os joelhos, mantendo as costas retas e o core engajado.',
      'Desça o quadril em direção ao chão, mantendo os joelhos alinhados com os pés.',
      'Estenda os joelhos e volte à posição inicial de forma controlada.'
    ],
    id: '407abc84-9cfb-4bf3-b0c8-df4c0560ed46'
  },
  {
    name: 'Avanço com barra',
    muscle: 'Quadríceps',
    equipment: 'Barra',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=U6FJh6M5Uo8',
      ptBr: 'https://www.youtube.com/watch?v=U6FJh6M5Uo8'
    },
    imageUrl: 'https://exemplo.com/avanco-com-barra.jpg',
    instructions: [
      'Posicione-se em pé segurando a barra com as mãos afastadas na largura dos ombros.',
      'Dê um passo à frente com uma perna, flexionando ambos os joelhos até que a perna de trás quase toque o chão.',
      'Estenda os joelhos e volte à posição inicial.',
      'Repita o movimento com a outra perna.'
    ],
    id: '99fb1667-98fd-4ec1-8415-9cc421e9445f'
  },
  {
    name: 'Cadeira extensora',
    muscle: 'Quadríceps',
    equipment: 'Máquina',
    level: 'Iniciante',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=f0y0LuL-7Ig',
      ptBr: 'https://www.youtube.com/watch?v=f0y0LuL-7Ig'
    },
    imageUrl: 'https://exemplo.com/cadeira-extensora.jpg',
    instructions: [
      'Sentado na cadeira, ajuste a almofada na altura dos tornozelos.',
      'Posicione as pernas na almofada, mantendo as costas retas e o core engajado.',
      'Estenda os joelhos, levantando a almofada.',
      'Flexione os joelhos, abaixando a almofada de forma controlada.'
    ],
    id: '5eefc166-cca8-4cf3-af94-d8e8cb54286e'
  },
  {
    name: 'Desenvolvimento militar',
    muscle: 'Ombros',
    equipment: 'Barra',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=F3QY5vMz_6I',
      ptBr: 'https://www.youtube.com/watch?v=m94gYsYsNco'
    },
    imageUrl: 'https://exemplo.com/desenvolvimento-militar.jpg',
    instructions: [
      'Fique em pé segurando a barra com as mãos afastadas na largura dos ombros.',
      'Eleve a barra até a altura do queixo, mantendo as escápulas para baixo e para trás.',
      'Desça a barra até a posição inicial de forma controlada.'
    ],
    id: '65b669b7-a378-4271-932e-292c0c53b168'
  },
  {
    name: 'Elevação lateral com halteres',
    muscle: 'Ombros',
    equipment: 'Halteres',
    level: 'Iniciante',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=5zBp-jyfN7A',
      ptBr: 'https://www.youtube.com/watch?v=0uJjKw75fV0'
    },
    imageUrl: 'https://exemplo.com/elevacao-lateral-com-halteres.jpg',
    instructions: [
      'Segure um halter em cada mão com os braços ao lado do corpo e as palmas voltadas para dentro.',
      'Eleve os halteres para o lado, mantendo os cotovelos levemente flexionados.',
      'Desça os halteres até a posição inicial de forma controlada.'
    ],
    id: 'a2049837-186c-45aa-8f7f-b10c09e392de'
  },
  {
    name: 'Elevação frontal com halteres',
    muscle: 'Ombros',
    equipment: 'Halteres',
    level: 'Iniciante',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=MFt3fizxf3M',
      ptBr: 'https://www.youtube.com/watch?v=Bl9gAii_8tE'
    },
    imageUrl: 'https://exemplo.com/elevacao-frontal-com-halteres.jpg',
    instructions: [
      'Segure um halter em cada mão com os braços ao lado do corpo e as palmas voltadas para dentro.',
      'Eleve os halteres à frente do corpo até a altura dos ombros.',
      'Desça os halteres até a posição inicial de forma controlada.'
    ],
    id: '6cb8ac3e-aa14-4315-81cd-05765df3c30b'
  },
  {
    name: 'Encolhimento com halteres',
    muscle: 'Trapézios',
    equipment: 'Halteres',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=tWbO8Y_k5nY',
      ptBr: 'https://www.youtube.com/watch?v=mDLys3qGzTY'
    },
    imageUrl: 'https://exemplo.com/encolhimento-com-halteres.jpg',
    instructions: [
      'Fique em pé segurando halteres com as palmas voltadas para o corpo e os pés afastados na largura dos ombros.',
      'Eleve os ombros em direção às orelhas, mantendo os braços retos.',
      'Segure a posição no topo do movimento por 1-2 segundos e, em seguida, abaixe os ombros de volta à posição inicial de forma controlada.'
    ],
    id: 'e7fc2f53-4c03-4068-ba89-d80ba4cbadb1'
  },
  {
    name: 'Remada alta com barra',
    muscle: 'Trapézios',
    equipment: 'Barra',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=5B5eYv5pBgI',
      ptBr: 'https://www.youtube.com/watch?v=5B5eYv5pBgI'
    },
    imageUrl: 'https://exemplo.com/remada-alta-com-barra.jpg',
    instructions: [
      'Fique em pé segurando uma barra com as mãos afastadas na largura dos ombros.',
      'Eleve a barra em direção às suas clavículas, mantendo os cotovelos altos e apontados para os lados.',
      'Segure a posição no topo do movimento por 1-2 segundos e, em seguida, abaixe a barra de volta à posição inicial de forma controlada.'
    ],
    id: '9f9126bc-dc23-45c6-a2ad-de9f2757fdf4'
  },
  {
    name: 'Elevação lateral com halteres',
    muscle: 'Trapézios',
    equipment: 'Halteres',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=Mn7JgGNjPME',
      ptBr: 'https://www.youtube.com/watch?v=Mn7JgGNjPME'
    },
    imageUrl: 'https://exemplo.com/elevacao-lateral-com-halteres.jpg',
    instructions: [
      'Fique em pé segurando halteres com as palmas voltadas para o corpo e os pés afastados na largura dos ombros.',
      'Eleve os braços para os lados até que estejam paralelos ao chão, mantendo os cotovelos levemente dobrados.',
      'Segure a posição no topo do movimento por 1-2 segundos e, em seguida, abaixe os halteres de volta à posição inicial de forma controlada.'
    ],
    id: '264de0d2-a505-482b-90a9-ba32ee85f2ca'
  },
  {
    name: 'Flexão de tríceps',
    muscle: 'Tríceps',
    equipment: 'Banco',
    level: 'Iniciante',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=4dF1DOWzf20',
      ptBr: 'https://www.youtube.com/watch?v=r7HbP0eM-_I'
    },
    imageUrl: 'https://exemplo.com/flexao-de-triceps.jpg',
    instructions: [
      'Sente-se no banco e posicione as mãos na borda do banco, com os dedos voltados para a frente.',
      'Deslize o corpo para fora do banco, mantendo as pernas estendidas e os calcanhares apoiados no chão.',
      'Dobre os cotovelos e abaixe o corpo em direção ao chão.',
      'Estenda os cotovelos e empurre o corpo de volta à posição inicial.'
    ],
    id: '309f210b-f2cf-4341-be2b-d3e3f13a82ba'
  },
  {
    name: 'Tríceps coice',
    muscle: 'Tríceps',
    equipment: 'Haltere',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=pLsT0-PpPnE',
      ptBr: 'https://www.youtube.com/watch?v=6IObiBHzFbg'
    },
    imageUrl: 'https://exemplo.com/triceps-coice.jpg',
    instructions: [
      'Segure o haltere com uma mão e coloque o joelho oposto no banco.',
      'Incline o tronco para frente e mantenha as costas retas.',
      'Mantenha o cotovelo próximo ao corpo e dobre-o, levando o haltere em direção ao ombro.',
      'Estenda o cotovelo e leve o haltere para trás, em direção ao quadril.'
    ],
    id: '15f8ef0d-4c87-4a8c-a37d-9575fc288691'
  },
  {
    name: 'Extensão de tríceps na polia alta',
    muscle: 'Tríceps',
    equipment: 'Polia',
    level: 'Intermediário',
    videoUrls: {
      en: 'https://www.youtube.com/watch?v=OIPeXpJ1Rf0',
      ptBr: 'https://www.youtube.com/watch?v=7nU5KjU_Sws'
    },
    imageUrl: 'https://exemplo.com/extensao-de-triceps-na-polia-alta.jpg',
    instructions: [
      'Fique em pé na frente da máquina de polia com uma barra ou corda anexada à polia alta.',
      'Mantenha os cotovelos próximos ao corpo e as costas retas.',
      'Estenda os braços para baixo até que a barra ou corda esteja próxima às coxas.',
      'Dobre os cotovelos e traga a barra ou corda em direção ao seu corpo, mantendo os cotovelos próximos ao tronco.'
    ],
    id: '33e5b3b4-d7f5-410c-a282-1342c42b247a'
  }
]

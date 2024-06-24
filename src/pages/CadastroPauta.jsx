import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, MenuItem, Button } from '@mui/material';
import { cadastrarPauta } from "../services/CadastroPauta";
import SendIcon from '@mui/icons-material/Send';

export const CadastroPauta =  () => {
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [turno, setTurno] = useState('')
    const [sala, setSala] = useState('')
    const [vara, setVara] = useState('')
    const [tipo, setTipo] = useState('');
    const [processo, setProcesso] = useState('')
    const [nomeParte, setNomeParte] = useState('')

    const tipoOptions = [
        { value: 'CONCILIACAO', label: 'Conciliação' },
        { value: 'INSTRUCAO', label: 'Instução' },
    ];

    const varaOptions = [
        { value: 'JEF Altamira', label: 'JEF Altamira'},
        { value: 'JEF Castanhal', label: 'JEF Castanhal'},
        { value: 'JEF Itaituba', label: 'JEF Itaituba'},
        { value: 'JEF Paragominas', label: 'JEF Paragominas'},
        { value: 'JEF Redenção', label: 'JEF Redenção'},
        { value: 'JEF Tucuruí', label: 'JEF Tucuruí'},
        { value: 'JEF Belém 8ª TIT', label: 'JEF Belém 8ª TIT'},
        { value: 'JEF Belém 8ª SUB', label: 'JEF Belém 8ª SUB'},
        { value: 'JEF Belém 10ª TIT', label: 'JEF Belém 10ª TIT'},
        { value: 'JEF Belém 10ª SUB', label: 'JEF Belém 10ª SUB'},
        { value: 'JEF Belém 11ª TIT', label: 'JEF Belém 11ª TIT'},
        { value: 'JEF Belém 11ª SUB', label: 'JEF Belém 11ª SUB'},
        { value: 'JEF Belém 12ª TIT', label: 'JEF Belém 12ª TIT'},
        { value: 'JEF Belém 12ª SUB', label: 'JEF Belém 12ª SUB'},
        { value: 'JEF Marabá 1ª', label: 'JEF Marabá 1ª'},
        { value: 'JEF Marabá 2ª', label: 'JEF Marabá 2ª'},
        { value: 'JEF Santarém 1ª', label: 'JEF Santarém 1ª'},
        { value: 'JEF Santarém 2ª', label: 'JEF Santarém 2ª'},
        { value: 'CEJUC Belém', label: 'CEJUC Belém'},

        { value: '1ª Vara Federal Belém', label: '1ª Vara Federal Belém' },
        { value: '2ª Vara Federal Belém', label: '2ª Vara Federal Belém' },
        { value: '5ª Vara Federal Belém', label: '5ª Vara Federal Belém' },
        { value: '1ª Vara Federal Marabá', label: '1ª Vara Federal Marabá' },
        { value: '2ª Vara Federal Marabá', label: '2ª Vara Federal Marabá' },
        { value: '1ª Vara Federal Santarém', label: '1ª Vara Federal Santarém' },
        { value: '2ª Vara Federal Santarém', label: '2ª Vara Federal Santarém' },
        { value: 'Vara Federal Altamira', label: 'Vara Federal Altamira' },
        { value: 'Vara Federal Castanhal', label: 'Vara Federal Castanhal' },
        { value: 'Vara Federal Itaituba', label: 'Vara Federal Itaituba' },
        { value: 'Vara Federal Paragominas', label: 'Vara Federal Paragominas' },
        { value: 'Vara Federal Redenção', label: 'Vara Federal Redenção' },
        { value: 'Vara Federal Tucuruí', label: 'Vara Federal Tucuruí' },

        { value: '4ª Vara cível de Belém', label: '4ª Vara cível de Belém' },
        { value: '3ª Vara cível de Parauapebas', label: '3ª Vara cível de Parauapebas' }
    ]

    const handleDataChange = (e) => {
        const lines = e.target.value.split('\n').map(line => {
          let value = line.replace(/\D/g, '');
          if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
          }
          if (value.length > 5) {
            value = value.slice(0, 5) + '/' + value.slice(5);
          }
          if (value.length > 10) {
            value = value.slice(0, 10);
          }
          return value;
        });
        setData(lines.join('\n'));
    };
      
    const handleHoraChange = (e) => {
      const lines = e.target.value.split('\n').map(line => {
            let value = line.replace(/\D/g, '');
            if (value.length > 2) {
              value = value.slice(0, 2) + ':' + value.slice(2)
            }
            if (value.length > 5) {
              value = value.slice(0, 5)
            }
            return value;
        });
        setHora(lines.join('\n'))
    };

    const handleTurnoChange = (e) => {
        setTurno(e.target.value);
    };

    const handleSalaChange = (e) => {
        setSala(e.target.value);
    };

    const handleVaraChange = (e) => {
        setVara(e.target.value);
    };

    const handleTipoChange = (e) => {
        setTipo(e.target.value);
    };
    
    const handleProcessoChange = (e) => {
        const lines = e.target.value.split('\n').map(line => {
            let value = line.replace(/\D/g, '');
            if (value.length > 7) {
                value = value.slice(0, 7) + '-' + value.slice(7)
            }
            if (value.length > 10) {
                value = value.slice(0, 10) + '.' + value.slice(10)
            }
            if (value.length > 15) {
                value = value.slice(0, 15) + '.' + value.slice(15)
            }
            if (value.length > 17) {
                value = value.slice(0, 17) + '.' + value.slice(17)
            }
            if (value.length > 20) {
                value = value.slice(0, 20) + '.' + value.slice(20)
            }
            if (value.length > 25) {
                value = value.slice(0, 25)
            }
            return value;
        });
        setProcesso(lines.join('\n'))
    };

    const handleNomeParteChange = (e) => {
        setNomeParte(e.target.value);
    };
      
    const countLines = (text) => {
      return text.split('\n').filter(line => line.trim() !== '').length;
    };
    
    const limparCampos = () => {
        setData('');
        setHora('');
        setTurno('');
        setSala('');
        setProcesso('');
        setNomeParte('');
        setVara('');
      };

    const [formValues, setFormValues] = useState({
        data: '',
        hora: '',
        turno: '',
        sala: '',
        vara: '',
        processo: '',
        nomeParte: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
          data,
          hora,
          turno,
          sala,
          vara,
          tipo,
          processo,
          nomeParte,
        };

        try {
            await cadastrarPauta(payload);
            alert('Pauta cadastrada com sucesso!');
            limparCampos();
          } catch (error) {
            console.error('Erro ao cadastrar pautista:', error);
            alert('Erro ao cadastrar pautista. Verifique os dados e tente novamente.');
          }
    };

    return (
        <>
          <Typography variant="h5" component="div" sx={{ mb: 3 }}>
            Cadastrar Pautas de Audiências
          </Typography>

          <Box sx={{ maxWidth: '1000px' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <TextField
                      id="data"
                      name="data"
                      placeholder="dd/mm/aa"
                      label="Data"
                      variant="outlined"
                      sx={{
                        width: '100%',
                        '& textarea': {
                          height: '100px',
                          overflowY: 'auto',
                          resize: 'vertical',
                        },
                      }}
                      value={data}
                      onChange={handleDataChange}
                      multiline
                      rows={2}
                      required
                    />
                    <Typography variant="body2" sx={{ m: 2 }}>
                        {countLines(data)} {countLines(data) === 1}
                    </Typography>
                
                    <TextField
                        id="hora"
                        name="hora"
                        placeholder="00:00"
                        label="Hora"
                        variant="outlined"
                        sx={{
                            width: '100%',
                            '& textarea': {
                              height: '100px',
                              overflowY: 'auto',
                              resize: 'vertical',
                            },
                        }}
                        value={hora}
                        onChange={handleHoraChange}
                        multiline
                        rows={2}
                        required
                    />
                    <Typography variant="body2" sx={{ m: 2 }}>
                        {countLines(hora)} {countLines(hora) === 1}
                    </Typography>

                    <TextField
                        id="turno"
                        name="turno"
                        placeholder="Tarde"
                        label="Turno"
                        variant="outlined"
                        sx={{
                            width: '100%',
                            '& textarea': {
                              height: '100px',
                              overflowY: 'auto',
                              resize: 'vertical',
                            },
                        }}
                        value={turno}
                        onChange={handleTurnoChange}
                        multiline
                        rows={2}
                        required
                    />
                    <Typography variant="body2" sx={{ m: 2 }}>
                        {countLines(turno)} {countLines(turno) === 1}
                    </Typography>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <TextField
                        id="sala"
                        name="sala"
                        label="Sala"
                        variant="outlined"
                        sx={{
                            width: '100%',
                            '& textarea': {
                              height: '100px',
                              overflowY: 'auto',
                              resize: 'vertical',
                            },
                        }}
                        value={sala}
                        onChange={handleSalaChange}
                        multiline
                        rows={2}
                        required
                    />
                    <Typography variant="body2" sx={{ m: 2 }}>
                        {countLines(sala)} {countLines(sala) === 1}
                    </Typography>

                    <TextField
                        id="vara"
                        name="vara"
                        select
                        label="Vara"
                        value={vara}
                        sx={{
                            m: '10px',
                            width: '100%',
                            '& textarea': {
                              height: '100px',
                              overflowY: 'auto',
                              resize: 'vertical',
                            },
                        }}
                        onChange={handleVaraChange}
                        required>

                        { varaOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <TextField
                        id="processo"
                        name="processo"
                        placeholder="0000000-00.0000.0.00.0000"
                        label="Processo"
                        variant="outlined"
                        sx={{
                            width: '100%',
                            '& textarea': {
                              height: '100px',
                              overflowY: 'auto',
                              resize: 'vertical',
                            },
                        }}
                        value={processo}
                        onChange={handleProcessoChange}
                        multiline
                        rows={2}
                        required
                    />
                    <Typography variant="body2" sx={{ m: 2 }}>
                        {countLines(processo)} {countLines(processo) === 1}
                    </Typography>

                    <TextField
                        id="nomeParte"
                        name="nomeParte"
                        label="Nome da Parte"
                        variant="outlined"
                        sx={{
                            width: '100%',
                            '& textarea': {
                              height: '100px',
                              overflowY: 'auto',
                              resize: 'vertical',
                            },
                        }}
                        value={nomeParte}
                        onChange={handleNomeParteChange}
                        multiline
                        rows={2}
                        required
                    />
                    <Typography variant="body2" sx={{ m: 2 }}>
                        {countLines(nomeParte)} {countLines(nomeParte) === 1}
                    </Typography>

                    
                </div>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <Button 
                  type="button" 
                  variant="outlined" 
                  onClick={limparCampos} 
                  className='clearButton'>
                  Limpar
                </Button>

                <Button 
                  type="submit" 
                  variant="contained" 
                  endIcon={<SendIcon />} 
                  className='sendButton' sx={{ ml: 1  }}>
                  Cadastrar
                </Button>
              </Box>
            </form>
          </Box>
        </>
    )
}
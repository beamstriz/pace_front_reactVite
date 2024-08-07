import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, MenuItem, Button } from '@mui/material';
export const EditarPautista =  () => {
    const [selecionarData, setSelecionarData] = useState('');
    const grupoOptions = [
        { value: 'PREPOSTO', label: 'Preposto' },
        { value: 'PROCURADOR', label: 'Procurador' },
    ];

    const statusOptions = [
        { value: 'ATIVO', label: 'Ativo' },
        { value: 'LICENCA', label: 'Licença' },
        { value: 'FERIAS', label: 'Férias' },
        { value: 'INATIVO', label: 'Inativo' }
    ];

    const turnoOptions = [
        { value: 'MANHA', label: 'Manhã' },
        { value: 'TARDE', label: 'Tarde' },
    ];

    const handleDateChange = (event) => {
        setSelecionarData(event.target.value);
    };

    return (
        <>
            <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                Editar Pautista
            </Typography>

            <Box sx={{ maxWidth: '60%', padding: 2 }}>
                <form>
                    <div>
                        <TextField
                            id="nome-pautista"
                            name="nome"
                            label="Nome Pautista"
                            variant="outlined"
                            sx={{ width: '100%', mb: 2 }}
                            // value={formValues.nome}
                            // onChange={(e) => setFormValues({ ...formValues, nome: e.target.value })}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <TextField
                            id="grupo"
                            name="grupo"
                            select
                            label="Grupo"
                            // value={formValues.grupo}
                            sx={{ width: '100%' }}
                            // onChange={(e) => setFormValues({ ...formValues, grupo: e.target.value })}
                            required
                        >
                         {grupoOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem> 
                             ))}
                        </TextField>

                        <TextField
                            id="turno"
                            name="turno"
                            select
                            label="Turno"
                            // value={formValues.turno}
                            sx={{ width: '100%'}}
                            // onChange={(e) => setFormValues({ ...formValues, turno: e.target.value })}
                            required
                        >
                        {turnoOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                        </TextField>

                        <TextField
                            id="status"
                            name="status"
                            select
                            label="Status"
                            // value={formValues.status}
                            sx={{ width: '100%' }}
                            // onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}
                            required
                        >
                         {statusOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem> 
                             ))}
                        </TextField>

                        
                    </div>

                    <div>
                    <TextField
                        id="date"
                        name="date"
                        label="Data Inicial"
                        type="date"
                        value={selecionarData}
                        onChange={handleDateChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ width: '100%', mb: 2 }}
                        required
                    />

                    <TextField
                        id="date"
                        name="date"
                        label="Data Final"
                        type="date"
                        value={selecionarData}
                        onChange={handleDateChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ width: '100%', mb: 2 }}
                        required
                    />
                    </div>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ ml: 1 }}
                    >
                    Atualizar
                    </Button>
                    </Box>

                    
                </form>
            </Box>
        </>
    )
}
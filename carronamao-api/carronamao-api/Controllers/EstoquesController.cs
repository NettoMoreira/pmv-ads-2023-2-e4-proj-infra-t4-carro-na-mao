﻿using carronamao_api.Models;
using carronamao_api.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace carronamao_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstoquesController : ControllerBase
    {
        private readonly EstoqueService _estoqueService;

        public EstoquesController(EstoqueService estoqueService)
        {
            _estoqueService = estoqueService;
        }

        [HttpGet]
        public async Task<List<Estoque>> findAll()
            => await _estoqueService.getAsync();


        [HttpGet("/find-by-veiculo")]
        public async Task<Estoque> findById(int id_veiculo)
             => await _estoqueService.getAsyncId(id_veiculo);

        [HttpPost]
        public async Task<Estoque> CreateEstoque(Estoque estoque)
        {
            await _estoqueService.CreateAsync(estoque);

            return estoque;
        }

        [HttpPut]
        public async Task<Estoque> UpdateEstoque(int id, Estoque estoque)
        {
            await _estoqueService.UpdateAsync(id, estoque);

            return estoque;
        }

        [HttpDelete]
        public async Task DeleteEstoque (int id_veiculo)
        {
            await _estoqueService.DeleteAsync(id_veiculo);
        }
    }
}

use anchor_lang::prelude::*;

declare_id!("4npWxHiL24QxENfR6k1cs5fXhSJ7RmxeFrMs6fYctDfu");

#[program]
pub mod quantum_sapiens {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

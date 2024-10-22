import Maintenance from '../models/maintenanceModel.js';

export const store = async (req, res) =>{
    try{
        const maintenance = await maintenance.create(req.body);
        return res.status(201).json(maintenance);
    }catch (error){
        return res.status(400).json({message: error.message});
    }
};

export const index = async (req, res) =>{
    try{
        const maintenance = await maintenance.find().exec();
        return res.status(201).json(maintenance);
    }catch (error){
        return res.status(400).json({message: error.message});
    }
};

export const update = async (req, res) =>{
    try{
        const maintenance = await maintenance.findByIdAndUpdate((req.params.id, req.body).exec());
        return res.status(201).json(maintenance);
    }catch (error){
        return res.status(400).json({message: error.message});
    }
};

export const destroy = async (req, res) =>{
    try{
        const maintenance= await maintenance.findByIdAndDelete((req.params.id).exec());
        return res.status(201).json(maintenance);
    }catch (error){
        return res.status(400).json({message: error.message});
    }
};
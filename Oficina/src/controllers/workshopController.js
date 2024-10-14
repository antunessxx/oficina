import Workshop from '../models/workshopModel.js';

export const store = async (req, res) =>{
    try{
        const workshop = await workshop.create(req.body);
        return res.status(201).json(workshop);
    }catch (error){
        return res.status(400).json({message: error.message});
    }
};

export const index = async (req, res) =>{
    try{
        const workshop = await workshop.find().exec();
        return res.status(201).json(workshop);
    }catch (error){
        return res.status(400).json({message: error.message});
    }
};

export const update = async (req, res) =>{
    try{
        const workshop = await workshop.findByIdAndUpdate((req.params.id, req.body).exec());
        return res.status(201).json(workshop);
    }catch (error){
        return res.status(400).json({message: error.message});
    }
};

export const destroy = async (req, res) =>{
    try{
        const workshop = await workshop.findByIdAndDelete((req.params.id).exec());
        return res.status(201).json(workshop);
    }catch (error){
        return res.status(400).json({message: error.message});
    }
};
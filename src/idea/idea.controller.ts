import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { IdeaService } from './idea/idea.service';
import { IdeaDTO } from './idea.dto';

@Controller('idea')
export class IdeaController {
    constructor(private ideaService: IdeaService){}

    @Get()
    getAllIdeas(){
        return this.ideaService.getAllIdeas();
    }

    @Post()
    createIdea(@Body() data: IdeaDTO){
        return this.ideaService.createIdea(data);
    }

    @Get(':id')
    readIdeaById(@Param('id') id: string){ 
        return this.ideaService.readIdeaById(id);
    }

    @Put(':id')
    updateIdeaById(@Param('id') id: string, @Body() data: Partial<IdeaDTO>){
        return this.ideaService.updateIdeaById(id, data);
    }

    @Delete(':id')
    deleteIdeaById(@Param('id') id: string){
        return this.ideaService.deleteIdeaById(id);
    }
}

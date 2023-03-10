import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from "@nestjs/common";

@Controller("movies")
export class MoviesController {
  @Get()
  getAll() {
    return "This will return all movies";
  }

  @Get("search")
  search(@Query('year') seachingYear: string) {
    return `We are searching for a movie made after : ${seachingYear}`;
  }

  @Get("/:id")
  getOne(@Param("id") id: string) {
    return `This will return one movie with the id : ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    return "This will create a movie";
  }
  
  @Delete("/id")
  remove(@Param("id") id: string) {
    return `This will delete a movies with the id: ${id}`;
  }

  @Patch("/:id")
  path(@Param("id") id: string, @Body() updateDate) {
    return {
      updatedMOvie: id,
      ...updateDate,
    };
  }
}

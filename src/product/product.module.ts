import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductsController],
  providers: [ProductRepository, ProductService],
})
export class ProductModule {}

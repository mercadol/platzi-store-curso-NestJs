import { Test, TestingModule } from '@nestjs/testing';
import { BandesController } from './bandes.controller';

describe('BandesController', () => {
  let controller: BandesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandesController],
    }).compile();

    controller = module.get<BandesController>(BandesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

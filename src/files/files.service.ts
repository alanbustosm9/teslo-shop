import { join } from 'path';
import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';

@Injectable()
export class FilesService {
  getStaticFile(file: string) {
    // Este path es donde estan los archivos estaticos y solo para los products
    const path = join(__dirname, '../../static/products', file);

    if (!existsSync(path)) {
      throw new BadRequestException(`File ${file} not found`);
    }

    return path;
  }
}

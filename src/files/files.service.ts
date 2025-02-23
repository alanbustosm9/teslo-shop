import { join } from 'path';
import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';

@Injectable()
export class FilesService {
  getStaticFile(file: string) {
    const path = join(__dirname, '../../static/uploads', file);

    if (!existsSync(path)) {
      throw new BadRequestException(`File ${file} not found`);
    }

    return path;
  }
}

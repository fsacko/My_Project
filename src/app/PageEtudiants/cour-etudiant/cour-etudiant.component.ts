import { Component, OnInit } from '@angular/core';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";
import {
	DecoupledEditor,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	BlockToolbar,
	Bold,
	CloudServices,
	Code,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlComment,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Markdown,
	MediaEmbed,
	Minimap,
	PageBreak,
	Paragraph,
	PasteFromMarkdownExperimental,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	ShowBlocks,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	Undo,
	type EditorConfig,
  ClassicEditor
} from 'ckeditor5';

@Component({
  selector: 'app-cour-etudiant',
  templateUrl: './cour-etudiant.component.html',
  styleUrl: './cour-etudiant.component.css'
})
export class CourEtudiantComponent implements OnInit{

  cours: any;
  modules: any;
  nom: any;
	public Editor = ClassicEditor;

	public Config: EditorConfig = {

  };

  public ngAfterViewInit(): void {
		this.Config = {
			toolbar: {
				items: [
					'undo',
					'redo',
					'|',
					'showBlocks',
					'|',
					'heading',
					'|',
					'fontSize',
					'fontFamily',
					'fontColor',
					'fontBackgroundColor',
					'|',
					'bold',
					'italic',
					'underline',
					'|',
					'link',
					'insertTable',
					'highlight',
					'blockQuote',
					'|',
					'alignment',
					'|',
					'bulletedList',
					'numberedList',
					'todoList',
					'outdent',
					'indent'
				],
				shouldNotGroupWhenFull: true
			},
			plugins: [
				AccessibilityHelp,
				Alignment,
				Autoformat,
				AutoImage,
				AutoLink,
				Autosave,
				BalloonToolbar,
				BlockQuote,
				BlockToolbar,
				Bold,
				CloudServices,
				Code,
				Essentials,
				FindAndReplace,
				FontBackgroundColor,
				FontColor,
				FontFamily,
				FontSize,
				GeneralHtmlSupport,
				Heading,
				HorizontalLine,
				HtmlComment,
				HtmlEmbed,
        Highlight,
				ImageBlock,
				ImageCaption,
				ImageInline,
				ImageInsertViaUrl,
				ImageResize,
				ImageStyle,
				ImageTextAlternative,
				ImageToolbar,
				ImageUpload,
				Indent,
				IndentBlock,
				Italic,
				Link,
				LinkImage,
				List,
				ListProperties,
				Markdown,
				MediaEmbed,
				Minimap,
				PageBreak,
				Paragraph,
				PasteFromMarkdownExperimental,
				PasteFromOffice,
				RemoveFormat,
				SelectAll,
				ShowBlocks,
				SpecialCharacters,
				SpecialCharactersArrows,
				SpecialCharactersCurrency,
				SpecialCharactersEssentials,
				SpecialCharactersLatin,
				SpecialCharactersMathematical,
				SpecialCharactersText,
				Strikethrough,
				Subscript,
				Superscript,
				Table,
				TableCaption,
				TableCellProperties,
				TableColumnResize,
				TableProperties,
				TableToolbar,
				TextTransformation,
				TodoList,
				Underline,
				Undo
			],
			balloonToolbar: ['bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList'],
			blockToolbar: [
				'fontSize',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'|',
				'link',
				'insertTable',
				'|',
				'bulletedList',
				'numberedList',
				'outdent',
				'indent'
			],
			fontFamily: {
				supportAllValues: true
			},
			fontSize: {
				options: [10, 12, 14, 'default', 18, 20, 22],
				supportAllValues: true
			},
			heading: {
				options: [
					{
						model: 'paragraph',
						title: 'Paragraphe',
						class: 'ck-heading_paragraph'
					},
					{
						model: 'heading1',
						view: 'h1',
						title: 'Titre 1',
						class: 'ck-heading_heading1'
					},
					{
						model: 'heading2',
						view: 'h2',
						title: 'Titre 2',
						class: 'ck-heading_heading2'
					},
					{
						model: 'heading3',
						view: 'h3',
						title: 'Titre 3',
						class: 'ck-heading_heading3'
					},
					{
						model: 'heading4',
						view: 'h4',
						title: 'Titre 4',
						class: 'ck-heading_heading4'
					},
					{
						model: 'heading5',
						view: 'h5',
						title: 'Titre 5',
						class: 'ck-heading_heading5'
					},
					{
						model: 'heading6',
						view: 'h6',
						title: 'Titre 6',
						class: 'ck-heading_heading6'
					}
				]
			},
			htmlSupport: {
				allow: [
					{
						name: /^.*$/,
						styles: true,
						attributes: true,
						classes: true
					}
				]
			},
			image: {
				toolbar: [
					'toggleImageCaption',
					'imageTextAlternative',
					'|',
					'imageStyle:inline',
					'imageStyle:wrapText',
					'imageStyle:breakText',
					'|',
					'resizeImage'
				]
			},
			initialData:this.contenuHtml,
			language: 'fr',
			link: {
				addTargetToExternalLinks: true,
				defaultProtocol: 'https://',
				decorators: {
					toggleDownloadable: {
						mode: 'manual',
						label: 'Downloadable',
						attributes: {
							download: 'file'
						}
					}
				}
			},
			list: {
				properties: {
					styles: true,
					startIndex: true,
					reversed: true
				}
			},
			table: {
				contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
			},
		};

		// this.isLayoutReady = true;
		// this.changeDetector.detectChanges();
	}

contenuHtml: string = '';

  constructor(private data:EtudiantDataService, public xss:DomSanitizer,public spinner: NgxSpinnerService, private sanitizer: DomSanitizer){  }

  ngOnInit()
  {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    if (this.data.moduleID != 0 ) {
      var id = this.data.moduleID;

      this.data.getEtudiantCoursBy(id).subscribe(res =>{
        this.cours = res;
        console.log(this.cours);
        for (let i = 0; i < this.cours.length; i++) {
          var el = this.cours[i];
          this.nom = el.nom;
          break;
        }
      });
      console.log(id);
      this.data.moduleID = 0;
    }
    else{
      this.data.getEtudiantCours().subscribe(res => {
        this.cours = res;
        console.log(res);
      });
    }
    this.voirCours = "";
  }

  getFileType(filePath: string): string {
    const fileExtension = filePath.split('.').pop();
    switch (fileExtension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'svg':
        return 'image';
      case 'mp4':
      case 'webm':
      case 'ogg':
        return 'video';
      case 'mp3':
      case 'wav':
        return 'audio';
      case 'pdf':
      case 'pdfs':
        return 'pdf';
      default:
        return 'other';
    }
  }

  voirCours:any;
  voirContenu(cours: any) {
    this.voirCours = cours;
    if (cours.contenu!=null) {
      // this.contenuHtml = this.sanitizer.bypassSecurityTrustHtml(cours.contenu);
      this.contenuHtml = cours.contenu
    }

  }

}

import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Cours } from '../../../model/Cours.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
// import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
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

import { Translations as translations } from 'ckeditor5';

@Component({
  selector: 'app-create-cours',
  templateUrl: './create-cours.component.html',
  styleUrl: './create-cours.component.css'
})
export class CreateCoursComponent implements OnInit {


	@ViewChild('editorToolbarElement') private editorToolbar!: ElementRef<HTMLDivElement>;
	@ViewChild('editorMenuBarElement') private editorMenuBar!: ElementRef<HTMLDivElement>;
	@ViewChild('editorMinimapElement') private editorMinimap!: ElementRef<HTMLDivElement>;

	public isLayoutReady = false;
	public Editor = ClassicEditor;
	public config: EditorConfig = {
  }; // CKEditor needs the DOM tree before calculating the configuration.
	public ngAfterViewInit(): void {
		this.config = {
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
				// AccessibilityHelp,
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
			// initialData:
      // 'Cours Ici',
				// '<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n    You\'ve successfully created a CKEditor 5 project. This powerful text editor will enhance your application, enabling rich text editing\n    capabilities that are customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n    <li>\n        <strong>Integrate into your app</strong>: time to bring the editing into your application. Take the code you created and add to your\n        application.\n    </li>\n    <li>\n        <strong>Explore features:</strong> Experiment with different plugins and toolbar options to discover what works best for your needs.\n    </li>\n    <li>\n        <strong>Customize your editor:</strong> Tailor the editor\'s configuration to match your application\'s style and requirements. Or even\n        write your plugin!\n    </li>\n</ol>\n<p>\n    Keep experimenting, and don\'t hesitate to push the boundaries of what you can achieve with CKEditor 5. Your feedback is invaluable to us\n    as we strive to improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n    <li>📝 <a href="https://orders.ckeditor.com/trial/premium-features">Trial sign up</a>,</li>\n    <li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n    <li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n    <li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n    <li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n    See this text, but the editor is not starting up? Check the browser\'s console for clues and guidance. It may be related to an incorrect\n    license key if you use premium features or another feature-related requirement. If you cannot make it work, file a GitHub issue, and we\n    will help as soon as possible!\n</p>\n',
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
			menuBar: {
				isVisible: true
			},
			// minimap: {
			// 	container: this.editorMinimap.nativeElement,
			// 	extraClasses: 'editor-container_include-minimap ck-minimap__iframe-content'
			// },
			placeholder: 'Contenu de cours ici !',
			table: {
				contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
			},

        // language: 'fr', // spécifiez le code de la langue, ici pour le français
        // dictionary: {
        //     'Paragraph': 'Paragraphe',
        //     'Heading 1': 'Titre 1',
        //     'Heading 2': 'Titre 2',
        //     'Heading 3': 'Titre 3',
        //     'Heading 4': 'Titre 4',
        //     'Heading 5': 'Titre 5',
        //     'Heading 6': 'Titre 6',
        //     'Toggle image caption': 'Afficher/masquer la légende',
        //     'Image text alternative': 'Texte alternatif de l\'image',
        //     'Resize image': 'Redimensionner l\'image',
        //     'Downloadable': 'Téléchargeable',
        //     'Table column': 'Colonne de tableau',
        //     'Table row': 'Ligne de tableau',
        //     'Merge table cells': 'Fusionner les cellules du tableau',
        //     'Table properties': 'Propriétés du tableau',
        //     'Table cell properties': 'Propriétés des cellules du tableau',
        //     // Ajoutez d'autres traductions selon vos besoins
        // }
		};

		this.isLayoutReady = true;
		this.changeDetector.detectChanges();
	}

	public onReady(editor: DecoupledEditor): void {
		Array.from(this.editorToolbar.nativeElement.children).forEach(child => child.remove());
		Array.from(this.editorMenuBar.nativeElement.children).forEach(child => child.remove());

		this.editorToolbar.nativeElement.appendChild(editor.ui.view.toolbar.element!);
		this.editorMenuBar.nativeElement.appendChild(editor.ui.view.menuBarView.element!);
	}
	onChange(event: any) {
	  const data = event?.editor?.getData();
	  console.log('Contenu de l\'éditeur :', data);
	  this.contenu = data;
	}


  selectedFile!: File ;
  uploadProgress: number | null = null;
  contenu:  any = 'Contenu du cours';
  sous_titre: string = "";
  titre: string = "";
  constructor(private data: DataService,private route:Router,public spinner: NgxSpinnerService,private changeDetector: ChangeDetectorRef) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  cours = new Cours;


  ngOnInit():void
  {
    this.spinner.show();
    // console.log(this.config);
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    // this.model;
    // this.coursFormGroup = this.formB.group({
    //   fichier:
    // });
    // this.editorData = '<p>Contenu initial de l\'éditeur.</p>';
    console.log(this.data.module_id);
    console.log(this.data.filiere_id);
  }

  saveCours():void
  {
    const filiere_id = this.data.filiere_id;
    const module_id = this.data.module_id;
    if (this.selectedFile && this.titre && this.sous_titre) {

      this.data.insertcour(this.selectedFile,this.titre,this.sous_titre,this.contenu,filiere_id,module_id).subscribe(event => {
        if (typeof event === 'object' && event.status === 'progress') {
          this.uploadProgress = event.message;
        }
        if (event.success) {
          console.log('File uploaded successfully', event);
        }
        this.route.navigateByUrl('gestion/Cours/liste');
      });
      // this.data.insertcours(this.selectedFile,this.titre,this.sous_titre,this.contenu,filiere_id,module_id).subscribe(res=>{
      //   this.route.navigateByUrl('gestion/Cours/liste');
      //   console.log('Create Cours!!!');
      // });
    }
    if(!this.selectedFile && this.contenu){
      this.data.insertCourContenu(this.titre,this.sous_titre,this.contenu,filiere_id,module_id).subscribe();
      this.route.navigateByUrl('gestion/Cours/liste');
    }
    else{
      console.log("Fichier non prise en compte!!!!");
    }
  }
}
